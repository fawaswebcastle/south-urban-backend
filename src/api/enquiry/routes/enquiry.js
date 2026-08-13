'use strict';

/**
 * enquiry router
 */

const { factories } = require('@strapi/strapi');

module.exports = factories.createCoreRouter('api::enquiry.enquiry', {
  config: {
    create: {
      auth: false,
    },
  },
});
