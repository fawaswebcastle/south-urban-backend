import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::enquiry.enquiry', {
  config: {
    create: {
      auth: false,
    },
  },
});
