import type { Core } from '@strapi/strapi';
import path from 'node:path';

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
          'hero', 'who-we-are', 'about-who-we-are', 'notice', 'contact', 'company-details', 'overview',
          'vision', 'mission', 'objectives', 'goals', 'values', 'membership',
          'coop-principles', 'coop-activities', 'blog-intro', 'socials', 'nav-links',
          'branding', 'person', 'post', 'service', 'notification', 'gallery-item', 'what-we-offer', 'gallery-category', 'header', 'footer', 'careers', 'enquiry', 'newsletter-subscription',
          'home-seo', 'about-seo', 'blog-seo', 'home-news-section', 'home-visual-story', 'home-leadership-section'
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
        console.log('✅ [Strapi Bootstrap] Public API permissions configured successfully.');
      }
    } catch (err) {
      console.warn('⚠️ [Strapi Bootstrap] Public permissions setup skipped:', err);
    }

    // Auto-seed home-news-section if not present
    try {
      const uid = 'api::home-news-section.home-news-section';
      const existing = await strapi.documents(uid as any).findFirst({ status: 'draft' });
      if (!existing) {
        const created = await strapi.documents(uid as any).create({
          data: {
            subtitle: 'NEWS & INSIGHTS',
            heading: 'Updates from South Urban Agro',
            description: 'Read our latest announcements, market analysis, and farming guides.',
            buttonText: 'View all articles',
            buttonUrl: '/blog',
          },
          status: 'draft',
        });
        if (created?.documentId) {
          await strapi.documents(uid as any).publish({ documentId: created.documentId });
          console.log('✅ [Strapi Bootstrap] Default [Home] News Section content created and published.');
        }
      }
    } catch (err) {
      console.warn('⚠️ [Strapi Bootstrap] Home news section seeding skipped:', err);
    }

    // Auto-seed home-visual-story if not present
    try {
      const uid = 'api::home-visual-story.home-visual-story';
      const existing = await strapi.documents(uid as any).findFirst({ status: 'draft' });
      if (!existing) {
        const created = await strapi.documents(uid as any).create({
          data: {
            subtitle: 'OUR VISUAL STORY',
            heading: 'From the field.',
            description: 'A glimpse of our farming community, sustainable practices, and daily operations.',
          },
          status: 'draft',
        });
        if (created?.documentId) {
          await strapi.documents(uid as any).publish({ documentId: created.documentId });
          console.log('✅ [Strapi Bootstrap] Default [Home] Visual Story content created and published.');
        }
      }
    } catch (err) {
      console.warn('⚠️ [Strapi Bootstrap] Home visual story seeding skipped:', err);
    }

    // Auto-seed home-leadership-section if not present
    try {
      const uid = 'api::home-leadership-section.home-leadership-section';
      const existing = await strapi.documents(uid as any).findFirst({ status: 'draft' });
      if (!existing) {
        const created = await strapi.documents(uid as any).create({
          data: {
            subtitle: 'LEADERSHIP & GOVERNANCE',
            heading: 'The people accountable to our members.',
            description: 'Six directors and a four-person executive team. Select anyone to read their full background.',
            boardDirectorsLabel: 'Board Directors',
          },
          status: 'draft',
        });
        if (created?.documentId) {
          await strapi.documents(uid as any).publish({ documentId: created.documentId });
          console.log('✅ [Strapi Bootstrap] Default [Home] Leadership Section content created and published.');
        }
      }
    } catch (err) {
      console.warn('⚠️ [Strapi Bootstrap] Home leadership section seeding skipped:', err);
    }

  },
};
