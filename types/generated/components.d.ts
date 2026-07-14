import type { Schema, Struct } from '@strapi/strapi';

export interface GalleryGalleryCategory extends Struct.ComponentSchema {
  collectionName: 'components_gallery_gallery_categories';
  info: {
    displayName: 'Gallery Category';
  };
  attributes: {
    category: Schema.Attribute.String & Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface SharedBlogPost extends Struct.ComponentSchema {
  collectionName: 'components_shared_blog_posts';
  info: {
    displayName: 'blog-post';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    linkLabel: Schema.Attribute.String;
    readTime: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_slides';
  info: {
    displayName: 'Hero Slide';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    headingHighlighted: Schema.Attribute.String;
    headingPrefix: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    secondaryCtaLink: Schema.Attribute.String;
    secondaryCtaText: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
  };
}

export interface SharedJobPosition extends Struct.ComponentSchema {
  collectionName: 'components_shared_job_positions';
  info: {
    displayName: 'job-position';
  };
  attributes: {
    department: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    location: Schema.Attribute.String;
    tags: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    redirectUrl: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_items';
  info: {
    displayName: 'service-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconName: Schema.Attribute.String;
    link: Schema.Attribute.String;
    linkLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'gallery.gallery-category': GalleryGalleryCategory;
      'shared.blog-post': SharedBlogPost;
      'shared.hero-slide': SharedHeroSlide;
      'shared.job-position': SharedJobPosition;
      'shared.link': SharedLink;
      'shared.logo': SharedLogo;
      'shared.service-item': SharedServiceItem;
    }
  }
}
