import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsFact extends Struct.ComponentSchema {
  collectionName: 'components_sections_facts';
  info: {
    description: 'Stat metric card with value and label';
    displayName: 'Fact Metric';
    icon: 'chart_pie';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsNavItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_nav_items';
  info: {
    description: 'Header navigation link';
    displayName: 'Nav Item';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsOfferItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_offer_items';
  info: {
    description: 'Accordion item for what we offer section';
    displayName: 'Offer Item';
    icon: 'bullet_list';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    summary: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPillar extends Struct.ComponentSchema {
  collectionName: 'components_sections_pillars';
  info: {
    description: 'Commitment pillar card with icon, title and description';
    displayName: 'Pillar';
    icon: 'shield';
  };
  attributes: {
    desc: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsSocialItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_social_items';
  info: {
    description: 'Header social link';
    displayName: 'Social Item';
    icon: 'share_alt';
  };
  attributes: {
    platform: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTab extends Struct.ComponentSchema {
  collectionName: 'components_sections_tabs';
  info: {
    description: 'Tab item with label, title and body text';
    displayName: 'Tab';
    icon: 'bullet_list';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    tabId: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.fact': SectionsFact;
      'sections.nav-item': SectionsNavItem;
      'sections.offer-item': SectionsOfferItem;
      'sections.pillar': SectionsPillar;
      'sections.social-item': SectionsSocialItem;
      'sections.tab': SectionsTab;
    }
  }
}
