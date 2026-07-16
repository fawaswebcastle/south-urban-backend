pipeline {
    agent any

    environment {
        // ╔══════════════════════════════════════════════════════════════════════╗
        // ║  PROJECT CONFIG — only edit these for a new project                 ║
        // ╠══════════════════════════════════════════════════════════════════════╣
        NAMESPACE            = 'webcastle-web'
        PROJECT_NAME         = 'south-indian-urban-backend'
        DOKPLOY_PROJECT_NAME = 'south-indian-urban'
        DOKPLOY_APP_NAME     = 'south-indian-urban-backend'
        APP_PORT             = '1337'
        VAULT_PROJECT_PATH   = 'south-indian-urban'   // Vault: <this>/data/backend/dev|production
        APP_SUBDOMAIN        = 'south-indian-urban-backend'  // <this>.wc-1.previewbay.com
        // ╚══════════════════════════════════════════════════════════════════════╝

        // ── Infrastructure (shared, do not edit) ──────────────────────────────
        GITLAB_REGISTRY     = 'registry.gitlab.com'
        DOKPLOY_BASE_DOMAIN = 'wc-1.previewbay.com'
        DOKPLOY_URL         = 'https://wc-1.previewbay.com'
        VAULT_CRED_ID       = 'VAULT-TOKEN'
        VAULT_ADDR          = 'https://vault.devops.previewbay.com'

        // ── Derived (do not edit) ─────────────────────────────────────────────
        IMAGE        = "${GITLAB_REGISTRY}/${NAMESPACE}/${PROJECT_NAME}"
        IMAGE_TAG    = "${IMAGE}:${env.BUILD_NUMBER}"
        IMAGE_LATEST = "${IMAGE}:latest"
    }

    stages {

        // ── Init ──────────────────────────────────────────────────────────────
        stage('Init') {
            steps {
                script {
                    def branch = env.GIT_BRANCH ?: env.BRANCH_NAME ?: ''
                    def target = (branch ==~ /.*(main|master)$/) ? 'production' : 'dev'

                    env.TARGET_ENV       = target
                    env.VAULT_SECRET     = "${VAULT_PROJECT_PATH}/data/backend/${target}"
                    env.DOKPLOY_ENV_NAME = target

                    echo "Branch: ${branch} → environment: ${target}"
                }
            }
        }

        // ── Build ─────────────────────────────────────────────────────────────
        stage('Build') {
            steps {
                sh "docker build -t ${IMAGE_TAG} -t ${IMAGE_LATEST} ."
            }
        }

        // ── Push ──────────────────────────────────────────────────────────────
        stage('Push') {
            options {
                timeout(time: 10, unit: 'MINUTES')
            }
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'JENKINS_V2_GITPAT',
                        usernameVariable: 'CI_REGISTRY_USER',
                        passwordVariable: 'CI_REGISTRY_PASSWORD'
                    )
                ]) {
                    sh """
                        echo \$CI_REGISTRY_PASSWORD | docker login ${GITLAB_REGISTRY} \
                            -u \$CI_REGISTRY_USER --password-stdin
                        docker push ${IMAGE_TAG}
                        docker push ${IMAGE_LATEST}
                        docker logout ${GITLAB_REGISTRY}
                    """
                }
            }
        }

        // ── Deploy ────────────────────────────────────────────────────────────
        stage('Deploy') {
            steps {
                withCredentials([
                    string(credentialsId: 'DOKPLOY_API_KEY', variable: 'DOKPLOY_API_KEY'),
                    usernamePassword(
                        credentialsId: 'JENKINS_V2_GITPAT',
                        usernameVariable: 'CI_REGISTRY_USER',
                        passwordVariable: 'CI_REGISTRY_PASSWORD'
                    ),
                    [
                        $class: 'VaultTokenCredentialBinding',
                        credentialsId: env.VAULT_CRED_ID,
                        vaultAddr: env.VAULT_ADDR
                    ],
                    sshUserPrivateKey(
                        credentialsId: 'WC1_SSH_KEY',
                        keyFileVariable: 'SSH_KEY_FILE',
                        usernameVariable: 'SSH_USER'
                    )
                ]) {
                    sh """
                        set -e
                        DOKPLOY_API="${DOKPLOY_URL}/api"
                        APP_DOMAIN="${APP_SUBDOMAIN}.${DOKPLOY_BASE_DOMAIN}"

                        UPLOADS_HOST_PATH="/var/lib/dokploy/volumes/${DOKPLOY_APP_NAME}-\${DOKPLOY_ENV_NAME}-uploads"
                        DATABASE_HOST_PATH="/var/lib/dokploy/volumes/${DOKPLOY_APP_NAME}-\${DOKPLOY_ENV_NAME}-database"
                        UPLOADS_CONTAINER_PATH="/opt/app/public/uploads"
                        DATABASE_CONTAINER_PATH="/opt/app/database"

                        # ── Helper: Dokploy API with HTTP status check ──────────
                        api() {
                            RESP=\$(curl -s -w "\\n__HTTP_STATUS__:%{http_code}" \\
                                -H "x-api-key: \$DOKPLOY_API_KEY" \\
                                -H "Content-Type: application/json" \\
                                "\$@")
                            HTTP_STATUS=\$(echo "\$RESP" | grep '__HTTP_STATUS__:' | cut -d: -f2)
                            BODY=\$(echo "\$RESP" | sed '/^__HTTP_STATUS__:/d')
                            if [ "\$HTTP_STATUS" -ge 400 ]; then
                                echo "  [ERROR] HTTP \$HTTP_STATUS: \$BODY" >&2
                                return 1
                            fi
                            echo "\$BODY"
                        }

                        # ── 0/6  Fetch env vars from Vault ─────────────────────
                        echo "[0/6] Fetching env vars from Vault (\${VAULT_SECRET})..."
                        VAULT_RESP=\$(curl -sf -H "X-Vault-Token: \$VAULT_TOKEN" \\
                            "${VAULT_ADDR}/v1/\${VAULT_SECRET}")
                        if [ -z "\$VAULT_RESP" ]; then
                            echo "[ERROR] Vault fetch failed. Path: \${VAULT_SECRET}" >&2
                            exit 1
                        fi

                        ENV_VARS=\$(echo "\$VAULT_RESP" | jq -r '
                            .data.data | to_entries[] |
                            if (.value | type) == "array"
                            then "\\(.key)=\\(.value | join(","))"
                            else "\\(.key)=\\(.value | tostring)"
                            end
                        ' | jq -Rs .)
                        echo "  Env vars fetched."

                        # ── 1/6  Resolve PROJECT_ID ─────────────────────────────
                        echo "[1/6] Resolving project '${DOKPLOY_PROJECT_NAME}'..."
                        ALL_PROJECTS=\$(api "\$DOKPLOY_API/project.all")
                        PROJECT_ID=\$(echo "\$ALL_PROJECTS" | \\
                            jq -r --arg name "${DOKPLOY_PROJECT_NAME}" \\
                            '.[] | select(.name == \$name) | .projectId' | head -1)

                        ENV_ID=""
                        if [ -z "\$PROJECT_ID" ] || [ "\$PROJECT_ID" = "null" ]; then
                            echo "  Not found — creating project..."
                            CREATE_PROJECT=\$(api -X POST "\$DOKPLOY_API/project.create" \\
                                -d "\$(jq -n \\
                                    --arg name "${DOKPLOY_PROJECT_NAME}" \\
                                    --arg desc "${DOKPLOY_PROJECT_NAME}" \\
                                    '{"name":\$name,"description":\$desc}')")
                            PROJECT_ID=\$(echo "\$CREATE_PROJECT" | jq -r '.project.projectId')
                            ENV_ID=\$(echo "\$CREATE_PROJECT"     | jq -r '.environment.environmentId')
                            echo "  Created project: \$PROJECT_ID (env: \$ENV_ID)"
                        else
                            echo "  Found project: \$PROJECT_ID"
                        fi

                        if [ -z "\$PROJECT_ID" ] || [ "\$PROJECT_ID" = "null" ]; then
                            echo "[ERROR] Could not resolve PROJECT_ID." >&2; exit 1
                        fi

                        # ── 2/6  Resolve ENV_ID ─────────────────────────────────
                        echo "[2/6] Resolving environment '\${DOKPLOY_ENV_NAME}'..."
                        curl -sf \\
                            -H "x-api-key: \$DOKPLOY_API_KEY" \\
                            -H "Content-Type: application/json" \\
                            "\$DOKPLOY_API/project.one?projectId=\$PROJECT_ID" \\
                            > /tmp/project_detail.json

                        if [ -z "\$ENV_ID" ] || [ "\$ENV_ID" = "null" ]; then
                            ENV_ID=\$(jq -r --arg name "\${DOKPLOY_ENV_NAME}" \\
                                '.environments[] | select(.name == \$name) | .environmentId' \\
                                /tmp/project_detail.json 2>/dev/null | head -1)
                            echo "  Found environment: \$ENV_ID"
                        else
                            echo "  Using auto-created environment: \$ENV_ID"
                        fi

                        if [ -z "\$ENV_ID" ] || [ "\$ENV_ID" = "null" ]; then
                            echo "  Not found — creating environment..."
                            CREATE_ENV=\$(api -X POST "\$DOKPLOY_API/environment.create" \\
                                -d "\$(jq -n \\
                                    --arg name "\${DOKPLOY_ENV_NAME}" \\
                                    --arg projectId "\$PROJECT_ID" \\
                                    '{"name":\$name,"projectId":\$projectId}')")
                            ENV_ID=\$(echo "\$CREATE_ENV" | jq -r '.environmentId')
                            echo "  Created environment: \$ENV_ID"
                        fi

                        if [ -z "\$ENV_ID" ] || [ "\$ENV_ID" = "null" ]; then
                            echo "[ERROR] Could not resolve ENV_ID." >&2; exit 1
                        fi

                        # ── 3/6  Resolve APP_ID ─────────────────────────────────
                        echo "[3/6] Resolving application '${DOKPLOY_APP_NAME}'..."
                        curl -sf \\
                            -H "x-api-key: \$DOKPLOY_API_KEY" \\
                            -H "Content-Type: application/json" \\
                            "\$DOKPLOY_API/project.one?projectId=\$PROJECT_ID" \\
                            > /tmp/project_detail.json

                        APP_ID=\$(jq -r \\
                            --arg envName "\${DOKPLOY_ENV_NAME}" \\
                            --arg appName "${DOKPLOY_APP_NAME}" \\
                            '.environments[] | select(.name == \$envName) | .applications[] | select(.name == \$appName) | .applicationId' \\
                            /tmp/project_detail.json 2>/dev/null | head -1)

                        if [ -z "\$APP_ID" ] || [ "\$APP_ID" = "null" ]; then
                            echo "  Not found — creating application..."
                            CREATE_APP=\$(api -X POST "\$DOKPLOY_API/application.create" \\
                                -d "\$(jq -n \\
                                    --arg name "${DOKPLOY_APP_NAME}" \\
                                    --arg proj "\$PROJECT_ID" \\
                                    --arg envId "\$ENV_ID" \\
                                    '{"name":\$name,"projectId":\$proj,"environmentId":\$envId}')")
                            APP_ID=\$(echo "\$CREATE_APP" | jq -r '.applicationId')
                            echo "  Created application: \$APP_ID"
                        else
                            echo "  Found existing application: \$APP_ID"
                        fi

                        if [ -z "\$APP_ID" ] || [ "\$APP_ID" = "null" ]; then
                            echo "[ERROR] Could not resolve APP_ID." >&2; exit 1
                        fi

                        # ── 4/6  Update image + env vars ────────────────────────
                        echo "[4/6] Updating image & env vars..."

                        REGISTRY_ID=\$(api "\$DOKPLOY_API/registry.all" | \\
                            jq -r --arg name "GitLab Backend Registry" \\
                            '.[] | select(.registryName == \$name) | .registryId' | head -1)

                        if [ -n "\$REGISTRY_ID" ] && [ "\$REGISTRY_ID" != "null" ]; then
                            api -X POST "\$DOKPLOY_API/registry.update" \\
                                -d "\$(jq -n \\
                                    --arg id "\$REGISTRY_ID" \\
                                    --arg user "\$CI_REGISTRY_USER" \\
                                    --arg pass "\$CI_REGISTRY_PASSWORD" \\
                                    --arg prefix "${NAMESPACE}" \\
                                    '{"registryId":\$id,"username":\$user,"password":\$pass,"imagePrefix":\$prefix}')" > /dev/null
                            echo "  Registry credentials refreshed."
                        else
                            echo "  Registry not found — creating..."
                            CREATE_REG=\$(api -X POST "\$DOKPLOY_API/registry.create" \\
                                -d "\$(jq -n \\
                                    --arg name "GitLab Backend Registry" \\
                                    --arg user "\$CI_REGISTRY_USER" \\
                                    --arg pass "\$CI_REGISTRY_PASSWORD" \\
                                    --arg url "${GITLAB_REGISTRY}" \\
                                    --arg prefix "${NAMESPACE}" \\
                                    '{"registryName":\$name,"username":\$user,"password":\$pass,"registryUrl":\$url,"registryType":"cloud","imagePrefix":\$prefix}')")
                            REGISTRY_ID=\$(echo "\$CREATE_REG" | jq -r '.registryId')
                            echo "  Created registry: \$REGISTRY_ID"
                        fi

                        UPDATE_PAYLOAD=\$(jq -n \\
                            --arg appId "\$APP_ID" \\
                            --arg img "${IMAGE_TAG}" \\
                            --argjson port ${APP_PORT} \\
                            --argjson env "\$ENV_VARS" \\
                            --arg regId "\$REGISTRY_ID" \\
                            '{"applicationId":\$appId,"sourceType":"docker","dockerImage":\$img,"port":\$port,"env":\$env} +
                             (if \$regId != "" and \$regId != "null" then {"registryId":\$regId} else {} end)')
                        api -X POST "\$DOKPLOY_API/application.update" -d "\$UPDATE_PAYLOAD" > /dev/null
                        echo "  Image and env updated."

                        # ── 5/6  Volume mounts ──────────────────────────────────
                        echo "[5/6] Configuring persistent volume mounts..."

                        ssh -i "\$SSH_KEY_FILE" -o StrictHostKeyChecking=no \\
                            "\$SSH_USER@${DOKPLOY_BASE_DOMAIN}" \\
                            "mkdir -p \$UPLOADS_HOST_PATH \$DATABASE_HOST_PATH"
                        echo "  Host directories ready."

                        EXISTING_MOUNTS=\$(curl -sf \\
                            -H "x-api-key: \$DOKPLOY_API_KEY" \\
                            -H "Content-Type: application/json" \\
                            "\$DOKPLOY_API/mount.listByServiceId?serviceId=\$APP_ID&serviceType=application" | \\
                            jq -r '.[].mountPath' 2>/dev/null || echo "")

                        if echo "\$EXISTING_MOUNTS" | grep -qx "\$UPLOADS_CONTAINER_PATH"; then
                            echo "  Uploads mount already exists, skipping."
                        else
                            api -X POST "\$DOKPLOY_API/mount.create" \\
                                -d "\$(jq -n \\
                                    --arg appId "\$APP_ID" \\
                                    --arg hostPath "\$UPLOADS_HOST_PATH" \\
                                    --arg mountPath "\$UPLOADS_CONTAINER_PATH" \\
                                    '{"serviceId":\$appId,"serviceType":"application","type":"bind","hostPath":\$hostPath,"mountPath":\$mountPath}')" > /dev/null
                            echo "  Uploads mount created: \$UPLOADS_HOST_PATH -> \$UPLOADS_CONTAINER_PATH"
                        fi

                        if echo "\$EXISTING_MOUNTS" | grep -qx "\$DATABASE_CONTAINER_PATH"; then
                            echo "  Database mount already exists, skipping."
                        else
                            api -X POST "\$DOKPLOY_API/mount.create" \\
                                -d "\$(jq -n \\
                                    --arg appId "\$APP_ID" \\
                                    --arg hostPath "\$DATABASE_HOST_PATH" \\
                                    --arg mountPath "\$DATABASE_CONTAINER_PATH" \\
                                    '{"serviceId":\$appId,"serviceType":"application","type":"bind","hostPath":\$hostPath,"mountPath":\$mountPath}')" > /dev/null
                            echo "  Database mount created: \$DATABASE_HOST_PATH -> \$DATABASE_CONTAINER_PATH"
                        fi

                        # ── 6/6  Domain (idempotent) + Deploy ───────────────────
                        echo "[6/6] Configuring domain and deploying..."

                        DOMAIN_ID=\$(curl -sf \\
                            -H "x-api-key: \$DOKPLOY_API_KEY" \\
                            -H "Content-Type: application/json" \\
                            "\$DOKPLOY_API/application.one?applicationId=\$APP_ID" | \\
                            jq -r --arg host "\$APP_DOMAIN" \\
                            '.domains[]? | select(.host == \$host) | .domainId' 2>/dev/null || echo "")

                        if [ -z "\$DOMAIN_ID" ] || [ "\$DOMAIN_ID" = "null" ]; then
                            api -X POST "\$DOKPLOY_API/domain.create" \\
                                -d "\$(jq -n \\
                                    --arg appId "\$APP_ID" \\
                                    --arg host "\$APP_DOMAIN" \\
                                    --argjson port ${APP_PORT} \\
                                    '{"applicationId":\$appId,"host":\$host,"port":\$port,"https":true,"certificateType":"letsencrypt","path":"/"}')" > /dev/null
                            echo "  Domain created: https://\$APP_DOMAIN"
                        else
                            echo "  Domain already exists, skipping."
                        fi

                        # Trigger deploy (no stop, no sleep — zero-downtime rolling update)
                        api -X POST "\$DOKPLOY_API/application.deploy" \\
                            -d "\$(jq -n --arg appId "\$APP_ID" '{"applicationId":\$appId}')" > /dev/null
                        echo "  Deployment triggered! https://\$APP_DOMAIN"
                    """
                }
            }
        }
    }

    post {
        always {
            sh "docker rmi ${IMAGE_TAG} ${IMAGE_LATEST} || true"
        }
        success {
            echo "Pipeline completed — build #${env.BUILD_NUMBER}"
        }
        failure {
            echo "Pipeline failed — build #${env.BUILD_NUMBER}"
        }
    }
}