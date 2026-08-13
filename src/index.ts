import type { Core } from '@strapi/strapi';
import path from 'path';

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // 1. Automatically grant Public Role Permissions for all 23 South Urban Content APIs
    try {
      const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' },
      });

      if (publicRole) {
        const apis = [
          'hero', 'who-we-are', 'notice', 'contact', 'company-details', 'overview',
          'vision', 'mission', 'objectives', 'goals', 'values', 'membership',
          'coop-principles', 'coop-activities', 'blog-intro', 'socials', 'nav-links',
          'branding', 'person', 'post', 'service', 'notification', 'gallery-item', 'what-we-offer', 'gallery-category', 'header', 'footer', 'enquiry', 'newsletter-subscription',
          'home-seo', 'about-seo', 'blog-seo'
        ];

        const actionsToEnable = apis.flatMap((api) => [
          `api::${api}.${api}.find`,
          `api::${api}.${api}.findOne`,
          `api::${api}.${api}.create`,
        ]);

        for (const action of actionsToEnable) {
          const existing = await strapi.db.query('plugin::users-permissions.permission').findOne({
            where: { role: publicRole.id, action },
          });

          if (!existing) {
            await strapi.db.query('plugin::users-permissions.permission').create({
              data: {
                action,
                role: publicRole.id,
              },
            });
          }
        }
        console.log('✅ [Strapi Bootstrap] Public API permissions configured successfully for all 23 endpoints.');
      }
    } catch (err) {
      console.warn('⚠️ [Strapi Bootstrap] Public permissions setup skipped:', err);
    }

    // 2. Automatically seed baseline content if empty
    try {
      const seedData = require(path.join(strapi.dirs.app.root, 'scripts/seed-strapi-full.js'));
      await seedData(strapi);
    } catch (err) {
      console.warn('⚠️ [Strapi Bootstrap] Baseline seed skipped:', err);
    }
  },
};
