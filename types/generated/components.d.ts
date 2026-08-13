import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsActivity extends Struct.ComponentSchema {
  collectionName: 'components_sections_activities';
  info: {
    description: 'Cooperative activity item with icon name, icon image upload, title and description';
    displayName: 'Activity';
    icon: 'briefcase';
  };
  attributes: {
    desc: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    iconMedia: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsDocumentItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_document_items';
  info: {
    description: 'Required document item with icon name, icon image upload, and label';
    displayName: 'Document Item';
    icon: 'file';
  };
  attributes: {
    icon: Schema.Attribute.String;
    iconMedia: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

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

export interface SectionsMembershipClass extends Struct.ComponentSchema {
  collectionName: 'components_sections_membership_classes';
  info: {
    description: 'Membership class card with name, tagline, total, totalLabel, and fee rows';
    displayName: 'Membership Class';
    icon: 'credit-card';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    rows: Schema.Attribute.Component<'sections.membership-row', true>;
    tagline: Schema.Attribute.String;
    total: Schema.Attribute.String & Schema.Attribute.Required;
    totalLabel: Schema.Attribute.String;
  };
}

export interface SectionsMembershipRow extends Struct.ComponentSchema {
  collectionName: 'components_sections_membership_rows';
  info: {
    description: 'Fee row with label and value';
    displayName: 'Membership Row';
    icon: 'list';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsMissionItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_mission_items';
  info: {
    description: 'Mission commitment item with focus label and text description';
    displayName: 'Mission Item';
    icon: 'target';
  };
  attributes: {
    focus: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
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

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
        minLength: 10;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    SearchKeyword: Schema.Attribute.Text;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.activity': SectionsActivity;
      'sections.document-item': SectionsDocumentItem;
      'sections.fact': SectionsFact;
      'sections.membership-class': SectionsMembershipClass;
      'sections.membership-row': SectionsMembershipRow;
      'sections.mission-item': SectionsMissionItem;
      'sections.nav-item': SectionsNavItem;
      'sections.offer-item': SectionsOfferItem;
      'sections.pillar': SectionsPillar;
      'sections.social-item': SectionsSocialItem;
      'sections.tab': SectionsTab;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
