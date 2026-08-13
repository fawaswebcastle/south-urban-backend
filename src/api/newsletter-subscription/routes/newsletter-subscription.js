'use strict';

/**
 * newsletter-subscription router
 */

const { factories } = require('@strapi/strapi');

module.exports = factories.createCoreRouter('api::newsletter-subscription.newsletter-subscription', {
  config: {
    create: {
      auth: false,
    },
  },
});
