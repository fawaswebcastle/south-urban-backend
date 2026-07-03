FROM node:20-alpine AS build

# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git > /dev/null 2>&1

# Set the environment variable for production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/

# Copy package.json and package-lock.json first to cache the npm install step
COPY package.json package-lock.json ./
RUN npm install

WORKDIR /opt/app
COPY . .

# Build the Strapi application
RUN npm run build

# ==========================================
# Production Stage
# ==========================================
FROM node:20-alpine

# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache vips-dev

# Set the environment variable for production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app

# Copy the node_modules and built app from the build stage
COPY --from=build /opt/node_modules ./node_modules
COPY --from=build /opt/app ./

# Add node_modules/.bin to PATH
ENV PATH=/opt/app/node_modules/.bin:$PATH

# Create required directories for Strapi
RUN mkdir -p /opt/app/public/uploads /opt/app/database

# Change ownership of the app directory to the node user
RUN chown -R node:node /opt/app
USER node

EXPOSE 1337

CMD ["npm", "run", "start"]
