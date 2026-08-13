const fs = require('fs');
const path = require('path');

const BACKEND_API = path.join(__dirname, '../src/api');

const singleTypes = [
  {
    name: 'hero',
    displayName: 'Hero Section',
    attributes: {
      badge: { type: 'string' },
      title: { type: 'string', required: true },
      subtitle: { type: 'text' },
      actionText: { type: 'string' },
      actionUrl: { type: 'string' },
      bgImage: { type: 'media', multiple: false, allowedTypes: ['images'] }
    }
  },
  {
    name: 'who-we-are',
    displayName: 'Who We Are',
    attributes: {
      tag: { type: 'string' },
      title: { type: 'string', required: true },
      description1: { type: 'text' },
      description2: { type: 'text' }
    }
  },
  {
    name: 'notice',
    displayName: 'Notice Bar Ticker',
    attributes: {
      text: { type: 'string', required: true },
      categories: { type: 'json' }
    }
  },
  {
    name: 'contact',
    displayName: 'Contact Details',
    attributes: {
      phone: { type: 'string', required: true },
      email: { type: 'string', required: true },
      address: { type: 'text', required: true }
    }
  },
  {
    name: 'company-details',
    displayName: 'Company Details',
    attributes: {
      regNo: { type: 'string' },
      title: { type: 'string' },
      subtitle: { type: 'string' },
      address: { type: 'text' },
      phone: { type: 'string' },
      email: { type: 'string' },
      gst: { type: 'string' },
      mapUrl: { type: 'string' },
      acts: { type: 'json' },
      bullets: { type: 'json' }
    }
  },
  {
    name: 'overview',
    displayName: 'Overview Section',
    attributes: {
      tag: { type: 'string' },
      title: { type: 'string' },
      intro: { type: 'text' },
      paragraphs: { type: 'json' }
    }
  },
  {
    name: 'vision',
    displayName: 'Vision Statement',
    attributes: {
      title: { type: 'string' },
      statement: { type: 'text' }
    }
  },
  {
    name: 'mission',
    displayName: 'Mission Statement',
    attributes: {
      title: { type: 'string' },
      statement: { type: 'text' },
      bullets: { type: 'json' }
    }
  },
  {
    name: 'objectives',
    displayName: 'Objectives Section',
    attributes: {
      tag: { type: 'string' },
      title: { type: 'string' },
      items: { type: 'json' }
    }
  },
  {
    name: 'goals',
    displayName: 'Goals Section',
    attributes: {
      tag: { type: 'string' },
      title: { type: 'string' },
      intro: { type: 'text' },
      items: { type: 'json' }
    }
  },
  {
    name: 'values',
    displayName: 'Values Section',
    attributes: {
      tag: { type: 'string' },
      title: { type: 'string' },
      intro: { type: 'text' },
      items: { type: 'json' }
    }
  },
  {
    name: 'membership',
    displayName: 'Membership Section',
    attributes: {
      tag: { type: 'string' },
      title: { type: 'string' },
      intro: { type: 'text' },
      who: { type: 'json' },
      rights: { type: 'json' }
    }
  },
  {
    name: 'coop-principles',
    displayName: 'Cooperative Principles',
    attributes: {
      tag: { type: 'string' },
      title: { type: 'string' },
      intro: { type: 'text' },
      items: { type: 'json' }
    }
  },
  {
    name: 'coop-activities',
    displayName: 'Cooperative Activities',
    attributes: {
      tag: { type: 'string' },
      title: { type: 'string' },
      intro: { type: 'text' },
      items: { type: 'json' }
    }
  },
  {
    name: 'blog-intro',
    displayName: 'Blog Section Intro',
    attributes: {
      label: { type: 'string' },
      title: { type: 'string' },
      intro: { type: 'text' }
    }
  },
  {
    name: 'socials',
    displayName: 'Social Links',
    attributes: {
      items: { type: 'json' }
    }
  },
  {
    name: 'nav-links',
    displayName: 'Main Nav Links',
    attributes: {
      items: { type: 'json' }
    }
  },
  {
    name: 'branding',
    displayName: 'Branding & Logo',
    attributes: {
      logo: { type: 'media', multiple: false, allowedTypes: ['images'] }
    }
  }
];

const collectionTypes = [
  {
    name: 'person',
    plural: 'people',
    displayName: 'Person (Leadership)',
    attributes: {
      name: { type: 'string', required: true },
      role: { type: 'string', required: true },
      group: { type: 'string', required: true },
      photo: { type: 'media', multiple: false, allowedTypes: ['images'] },
      photoPosition: { type: 'string' },
      teaser: { type: 'text' },
      bio: { type: 'text' },
      order: { type: 'integer', default: 0 },
      published: { type: 'boolean', default: true }
    }
  },
  {
    name: 'post',
    plural: 'posts',
    displayName: 'Post (Blog Article)',
    attributes: {
      title: { type: 'string', required: true },
      slug: { type: 'string', required: true, unique: true },
      excerpt: { type: 'text' },
      image: { type: 'media', multiple: false, allowedTypes: ['images'] },
      category: { type: 'string', required: true },
      author: { type: 'string', required: true },
      date: { type: 'string', required: true },
      readTime: { type: 'string' },
      body: { type: 'json' },
      order: { type: 'integer', default: 0 },
      published: { type: 'boolean', default: true }
    }
  },
  {
    name: 'service',
    plural: 'services',
    displayName: 'Service',
    attributes: {
      title: { type: 'string', required: true },
      summary: { type: 'text', required: true },
      body: { type: 'text', required: true },
      order: { type: 'integer', default: 0 },
      published: { type: 'boolean', default: true }
    }
  },
  {
    name: 'notification',
    plural: 'notifications',
    displayName: 'Notification (Announcement)',
    attributes: {
      title: { type: 'string', required: true },
      summary: { type: 'text' },
      date: { type: 'string', required: true },
      category: { type: 'string' },
      hasDownload: { type: 'boolean', default: false },
      order: { type: 'integer', default: 0 },
      published: { type: 'boolean', default: true }
    }
  },
  {
    name: 'gallery-item',
    plural: 'gallery-items',
    displayName: 'Gallery Item',
    attributes: {
      src: { type: 'media', multiple: false, allowedTypes: ['images'] },
      alt: { type: 'string', required: true },
      category: { type: 'string', required: true },
      order: { type: 'integer', default: 0 },
      published: { type: 'boolean', default: true }
    }
  }
];

function createContentType(item, kind) {
  const dir = path.join(BACKEND_API, item.name);
  const ctDir = path.join(dir, 'content-types', item.name);
  const ctrlDir = path.join(dir, 'controllers');
  const routeDir = path.join(dir, 'routes');
  const srvDir = path.join(dir, 'services');

  fs.mkdirSync(ctDir, { recursive: true });
  fs.mkdirSync(ctrlDir, { recursive: true });
  fs.mkdirSync(routeDir, { recursive: true });
  fs.mkdirSync(srvDir, { recursive: true });

  const singularName = item.name;
  const pluralName = item.plural || `${item.name}s`;

  const schema = {
    kind: kind,
    collectionName: item.name.replace(/-/g, '_'),
    info: {
      singularName: singularName,
      pluralName: pluralName,
      displayName: item.displayName
    },
    options: {
      draftAndPublish: true
    },
    pluginOptions: {},
    attributes: item.attributes
  };

  fs.writeFileSync(path.join(ctDir, 'schema.json'), JSON.stringify(schema, null, 2));

  const controller = `import { factories } from '@strapi/strapi';\nexport default factories.createCoreController('api::${item.name}.${item.name}');\n`;
  fs.writeFileSync(path.join(ctrlDir, `${item.name}.ts`), controller);

  const route = `import { factories } from '@strapi/strapi';\nexport default factories.createCoreRouter('api::${item.name}.${item.name}');\n`;
  fs.writeFileSync(path.join(routeDir, `${item.name}.ts`), route);

  const service = `import { factories } from '@strapi/strapi';\nexport default factories.createCoreService('api::${item.name}.${item.name}');\n`;
  fs.writeFileSync(path.join(srvDir, `${item.name}.ts`), service);

  console.log(`[Created] ${kind}: ${item.name}`);
}

singleTypes.forEach(t => createContentType(t, 'singleType'));
collectionTypes.forEach(t => createContentType(t, 'collectionType'));

console.log('Done generating clean Strapi Content Types!');
