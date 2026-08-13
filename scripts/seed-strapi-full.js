/**
 * 100% Complete Content Seeder for South Urban Strapi 5 Headless CMS.
 * Creates and publishes entries using Strapi 5 Document Service API so that
 * both DRAFT and PUBLISHED tabs are populated in Strapi Admin.
 */

const siteData = {
  hero: {
    badge: "Government of India Registered",
    title: "Empowering Farmers, Building Communities",
    subtitle: "A member-owned cooperative bringing fair inputs, honest credit and better markets to the people who grow our food.",
    actionText: "Explore Member Services",
    actionUrl: "#services"
  },
  'who-we-are': {
    tag: "Who we are",
    title: "A Society Built on Trust & Transparency",
    description1: "South Urban Agro Multi State Co-operative Society Ltd. has been the backbone of rural and peri-urban agricultural communities for over 15 years. We offer services ranging from input supply and marketing to financial assistance and skill development.",
    description2: "Our cooperative model ensures that every member has a voice in governance, a share in profits, and access to the resources needed to thrive in today's dynamic agri-market.",
    regBadgeText: "MSCS Reg: MSCS/CR/1664/2026",
    cardTitle: "South Urban Agro Co-op",
    cardSubtitle: "Serving Kerala & Tamil Nadu",
    tabs: [
      {
        __component: "sections.tab",
        tabId: "heritage",
        label: "15+ Years Legacy",
        title: "Backbone of Rural Agricultural Communities",
        body: "Established as a member-first Multi-State Cooperative Society, South Urban has empowered thousands of farming families across Kerala and Tamil Nadu with dependable credit, collective marketing, and technical guidance."
      },
      {
        __component: "sections.tab",
        tabId: "reach",
        label: "Area of Operation",
        title: "Operating Across Kerala & Tamil Nadu",
        body: "Registered under MSCS/CR/1664/2026, our operational network bridges rural smallholders with modern agribusiness tools, digital member portals, and fair market linkages."
      },
      {
        __component: "sections.tab",
        tabId: "promise",
        label: "Member Promise",
        title: "Shared Prosperity & Fair Returns",
        body: "Every member holds equal democratic voting rights, a share in cooperative growth, and priority access to society credit schemes, farm machinery, and skill development programs."
      }
    ],
    pillars: [
      {
        __component: "sections.pillar",
        icon: "Sprout",
        title: "Agri Input & Technical Guidance",
        desc: "Supplying certified seeds, fertilisers, and organic inputs at collective prices with field advisory support."
      },
      {
        __component: "sections.pillar",
        icon: "ShieldCheck",
        title: "Democratic Governance",
        desc: "Registered under MSCS Act 2002; member-governed with complete operational transparency."
      },
      {
        __component: "sections.pillar",
        icon: "Users2",
        title: "Member Welfare & Credit",
        desc: "Thrift savings, gold-linked credit, and capacity-building workshops across Kerala & Tamil Nadu."
      }
    ],
    facts: [
      {
        __component: "sections.fact",
        value: "15+",
        label: "Years serving farming communities"
      },
      {
        __component: "sections.fact",
        value: "2",
        label: "States of operation"
      },
      {
        __component: "sections.fact",
        value: "12",
        label: "Member services"
      },
      {
        __component: "sections.fact",
        value: "2026",
        label: "Registered under MSCS Act"
      }
    ]
  },
  notice: {
    text: "Scheduled System Maintenance – Temporary Service Interruption",
    categories: ["Financial Scheme", "Input Supply", "Governance"]
  },
  contact: {
    tag: "Contact us",
    title: "Have a question, enquiry, or partnership proposal?",
    description: "We'd love to hear from you.",
    phone: "+91 484 238 4900",
    email: "info@southurbanagro.com",
    address: "Kishanu Square, First Floor, Power House Jn, Viyur – Thrissur 680010",
    newsletterTitle: "Stay in the loop",
    newsletterSubtitle: "Subscribe for news, updates, and offers from South Urban."
  },
  'company-details': {
    regNo: "MSCS/CR/1664/2026",
    title: "SOUTH URBAN AGRO MULTI STATE CO-OP SOCIETY LIMITED",
    subtitle: "Multi-State Co-operative Society Registered under MSCS Act, 2002",
    address: "Kishanu Square, First Floor, Power House Jn, Viyur – Thrissur 680010",
    phone: "+91 484 238 4900",
    email: "info@southurbanagro.com",
    gst: "32AAALS4900K1Z5",
    mapUrl: "https://maps.google.com/?q=Thrissur+Kerala",
    acts: ["Multi-State Co-operative Societies Act, 2002", "MSCS Rules, 2002"],
    bullets: [
      "Registered with the Central Registrar of Co-operative Societies, Ministry of Cooperation, New Delhi.",
      "Area of operation covers Kerala and Tamil Nadu.",
      "Subject to annual statutory audit by empanelled Chartered Accountants."
    ]
  },
  overview: {
    tag: "Cooperative overview",
    title: "What an Agro Multi-State Cooperative Society does",
    intro: "An Agro Multi-State Cooperative Society is a member-owned organization registered under the provisions of the Multi State Cooperative Societies Act, 2002.",
    paragraphs: [
      "The society focuses on activities such as agricultural input supply, procurement and marketing of farm produce, food processing, warehousing, cold storage, and financial facilitation.",
      "By pooling resources and working collectively, members benefit from improved market access, better pricing, reduced input costs, and enhanced income opportunities."
    ]
  },
  vision: {
    title: "Our Vision",
    statement: "To be a premier, transparent, technology-driven, and member-centric Multi-State Cooperative that empowers farmers and rural communities across Kerala and Tamil Nadu through sustainable economic growth, innovation, and shared prosperity."
  },
  mission: {
    title: "Our Mission",
    statement: "We are committed to transforming the lives of farmers by delivering high-quality agricultural inputs, securing better price realization, and upholding transparent governance.",
    bullets: [
      "Delivering high-quality agricultural inputs at fair prices.",
      "Securing better price realization through collective marketing.",
      "Providing timely short-term credit to boost farm productivity.",
      "Harnessing modern technology for seamless service delivery."
    ]
  },
  objectives: {
    tag: "Objectives",
    title: "Four Commitments",
    items: [
      { title: "Member-Centric Service Excellence", desc: "Provide quality agricultural inputs at fair prices and ensure better price realization." },
      { title: "Financial Empowerment", desc: "Offer timely short-term credit to members to boost agricultural productivity." },
      { title: "Transparency & Good Governance", desc: "Maintain strong financial discipline and the highest levels of transparency." },
      { title: "Technological Advancement", desc: "Leverage modern technology for efficient, paperless service delivery." }
    ]
  },
  goals: {
    tag: "Strategic Goals",
    title: "Target Milestones",
    intro: "Our primary goals are to provide quality agricultural inputs, ensure price realization, and deliver timely credit.",
    items: [
      { title: "Member Base", desc: "Expand member base across Kerala and Tamil Nadu." },
      { title: "Financial Inclusion", desc: "Promote member thrift and savings schemes." }
    ]
  },
  values: {
    tag: "Core Values",
    title: "Seven Principles Our Members Hold Us To",
    intro: "Guided by ethical principles in every decision.",
    items: [
      { title: "Transparency", desc: "Open, honest, and accountable operations in all our dealings." },
      { title: "Farmer Centricity", desc: "Our members and their prosperity are at the heart of every decision." },
      { title: "Integrity", desc: "We uphold the highest ethical standards and honour our commitments." },
      { title: "Excellence", desc: "Quality and continuous improvement in our products and services." },
      { title: "Innovation", desc: "We embrace technology and modern solutions to serve members better." },
      { title: "Collaboration", desc: "We work with farmers and communities for collective success." },
      { title: "Sustainability", desc: "Environmentally responsible growth, measured over the long term." }
    ]
  },
  membership: {
    tag: "Membership",
    title: "Two Ways to Hold a Share",
    intro: "The Board has opened a large-scale membership drive under Class A (₹110) and Class B (₹1,200).",
    who: [
      { title: "Class A", desc: "Entry membership minimum ₹110" },
      { title: "Class B", desc: "Full share membership minimum ₹1,200" }
    ],
    rights: [
      { title: "Voting Rights", desc: "One member, one vote." },
      { title: "Dividend Eligibility", desc: "Eligible for annual surplus distribution." }
    ]
  },
  'coop-principles': {
    tag: "Cooperative Principles",
    title: "7 International Cooperative Principles",
    intro: "Operates on democratic principles where each member has an equal voice.",
    items: [
      { title: "Voluntary & Open Membership", desc: "Open to all agricultural producers without discrimination." },
      { title: "Democratic Member Control", desc: "Equal voting rights and member governance." }
    ]
  },
  'coop-activities': {
    tag: "Activities",
    title: "Operational Activities",
    intro: "Six key activity areas supporting farmers.",
    items: [
      { title: "Agricultural Input Supply", desc: "Seeds, fertilisers, and crop protection sourced collectively." },
      { title: "Procurement & Marketing", desc: "Farm produce aggregated and taken to better markets." },
      { title: "Warehousing & Cold Storage", desc: "Storage letting members hold produce for a fairer price." },
      { title: "Processing & Value Addition", desc: "Food processing and agro-based industry at member scale." },
      { title: "Dairy & Livestock Development", desc: "Allied-sector support beyond the crop cycle." },
      { title: "Rural Finance Facilitation", desc: "Short-term credit routed through the cooperative." }
    ]
  },
  'blog-intro': {
    label: "News & Insights",
    title: "Updates from South Urban Agro",
    intro: "Read our latest announcements, market analysis, and farming guides."
  },
  socials: {
    items: [
      { name: "Facebook", href: "https://facebook.com" },
      { name: "Instagram", href: "https://instagram.com" },
      { name: "LinkedIn", href: "https://linkedin.com" }
    ]
  },
  'nav-links': {
    items: [
      { label: "About Us", href: "#who-we-are" },
      { label: "Services", href: "#services" },
      { label: "Leadership", href: "#leadership" },
      { label: "Careers", href: "#careers" },
      { label: "Gallery", href: "#gallery" },
      { label: "Blogs", href: "/blog" }
    ]
  },
  branding: {
    title: "South Urban Agro Multi State Co-operative Society Ltd."
  },
  header: {
    phone: "+91 484 238 4900",
    contactBtnLabel: "Contact Us",
    contactBtnHref: "#contact",
    navItems: [
      { __component: "sections.nav-item", label: "About Us", href: "#who-we-are" },
      { __component: "sections.nav-item", label: "Services", href: "#services" },
      { __component: "sections.nav-item", label: "Leadership", href: "#leadership" },
      { __component: "sections.nav-item", label: "Careers", href: "#careers" },
      { __component: "sections.nav-item", label: "Gallery", href: "#gallery" },
      { __component: "sections.nav-item", label: "Blogs", href: "/blog" }
    ],
    socials: [
      { __component: "sections.social-item", platform: "facebook", url: "https://facebook.com" },
      { __component: "sections.social-item", platform: "instagram", url: "https://instagram.com" },
      { __component: "sections.social-item", platform: "linkedin", url: "https://linkedin.com" }
    ]
  },
  footer: {
    description: "Empowering agricultural communities through cooperative principles, sustainable practices, and market-driven solutions since 2009.",
    regText: "Reg. MSCS/CR/1664/2026",
    areaText: "Area of operation: Kerala, Tamil Nadu",
    quickLinksTitle: "QUICK LINKS",
    quickLinks: [
      { __component: "sections.nav-item", label: "About Us", href: "#who-we-are" },
      { __component: "sections.nav-item", label: "Services", href: "#services" },
      { __component: "sections.nav-item", label: "Leadership", href: "#leadership" },
      { __component: "sections.nav-item", label: "Careers", href: "#careers" },
      { __component: "sections.nav-item", label: "Gallery", href: "#gallery" },
      { __component: "sections.nav-item", label: "Blogs", href: "/blog" }
    ],
    contactTitle: "GET IN TOUCH",
    phone: "+91 484 238 4900",
    email: "info@southurbanagro.com",
    address: "Kishanu Square, First Floor, Power House Jn, Viyur – Thrissur 680010",
    copyright: "Copyright © 2026 South Urban. All rights reserved.",
    actText: "Registered under the Multi State Cooperative Societies Act, 2002"
  },
  'what-we-offer': {
    tag: "WHAT WE OFFER",
    title: "Twelve services, across the whole agricultural value chain.",
    description: "Each opens as you scroll — or select any line to jump to it.",
    items: [
      {
        __component: "sections.offer-item",
        title: "Member Thrift & Contribution Schemes",
        summary: "Recurring, fixed and long-term savings plans for members.",
        body: "The Society offers a range of thrift and contribution schemes exclusively for its members to encourage the habit of regular savings and disciplined financial planning. Members can choose from recurring contribution plans, fixed contribution schemes, and other long-term thrift options tailored to different financial goals. These schemes help members build financial security over time while remaining fully within the framework of cooperative principles and the Society's bye-laws."
      },
      {
        __component: "sections.offer-item",
        title: "Agricultural Credit & Finance",
        summary: "Affordable credit for cultivation, irrigation, livestock and mechanisation.",
        body: "Recognising the genuine credit needs of farmer members, the Society provides timely and affordable agricultural credit for a wide range of purposes, including crop cultivation, plantation development, irrigation systems, farm mechanisation, livestock rearing, dairy and poultry activities, and other allied agricultural enterprises. These credit facilities are extended only to members and are aimed at enhancing productivity, reducing dependence on informal sources of credit, and enabling the adoption of modern and sustainable farming practices."
      },
      {
        __component: "sections.offer-item",
        title: "Gold-Linked Credit Facilities",
        summary: "Quick liquidity against gold, for members only.",
        body: "Subject to the Society's approved bye-laws and applicable cooperative regulations, limited gold-linked credit facilities may be extended exclusively to members to meet urgent personal, agricultural, business, or emergency requirements. The process is kept transparent and member-friendly, with the primary objective of providing quick liquidity while remaining fully compliant with cooperative norms."
      },
      {
        __component: "sections.offer-item",
        title: "Farmer Development Programmes",
        summary: "Workshops and field demonstrations on modern and organic farming.",
        body: "The Society regularly organises awareness programmes, workshops, field demonstrations, and training sessions on modern agriculture, organic and natural farming, water conservation, soil health management, crop diversification, integrated pest management, and sustainable farming technologies. These capacity-building initiatives help member farmers improve productivity, reduce input costs, and adopt environment-friendly practices."
      },
      {
        __component: "sections.offer-item",
        title: "Agricultural Machinery & Infrastructure Support",
        summary: "Shared access to equipment that lowers labour costs.",
        body: "To promote mechanised and efficient farming, the Society facilitates access to agricultural machinery, equipment, and related infrastructure through collective initiatives and member-based financial support. This enables farmers to reduce labour costs, improve operational efficiency, and adopt modern farming methods that enhance overall farm productivity."
      },
      {
        __component: "sections.offer-item",
        title: "Marketing & Value Chain Development",
        summary: "Stronger market linkages and fewer intermediaries.",
        body: "The Society works systematically to strengthen market linkages for its members by assisting in the marketing of agricultural produce, promoting value addition and primary processing, facilitating collective procurement of quality inputs, and improving access to better markets and fairer prices. Collective marketing efforts help members reduce intermediaries and realise better returns."
      },
      {
        __component: "sections.offer-item",
        title: "Rural Development & Community Welfare",
        summary: "Education, health, women's empowerment and youth enterprise.",
        body: "Committed to holistic rural development, the Society actively supports initiatives in education, skill development, women empowerment, youth entrepreneurship, health awareness, environmental conservation, and community welfare activities among its members and in the areas of its operation. These efforts contribute to the overall socio-economic progress of rural communities."
      },
      {
        __component: "sections.offer-item",
        title: "Financial Inclusion of Members",
        summary: "Thrift habits and financial literacy for underserved members.",
        body: "The Society strives to bring accessible and responsible financial services to its rural and underserved members by encouraging thrift habits, promoting responsible credit behaviour, and creating opportunities for financial literacy and economic empowerment. The focus remains on enabling members to manage their finances more effectively and securely."
      },
      {
        __component: "sections.offer-item",
        title: "Digital Member Services",
        summary: "Digital records, prompt service and streamlined transactions.",
        body: "The Society is committed to delivering efficient, transparent, and technology-enabled services through digital member management systems, accurate record keeping, prompt member service, and streamlined financial transactions. These digital initiatives enhance convenience, accountability, and ease of access for members."
      },
      {
        __component: "sections.offer-item",
        title: "Agricultural Input Supply",
        summary: "Certified seeds, fertilisers and crop protection at collective prices.",
        body: "The Society facilitates the timely supply of quality agricultural inputs to its members, including certified seeds, fertilisers, organic manures, bio-fertilisers, crop protection products, micronutrients, irrigation materials, and modern farming equipment, sourced from reputed manufacturers and approved suppliers. Through collective procurement and an efficient distribution system, members are able to access essential farm inputs at competitive prices while maintaining high standards of quality. Technical guidance on the proper selection and application of inputs is also provided to promote sustainable farming and improve yields."
      },
      {
        __component: "sections.offer-item",
        title: "Training and Skill Development",
        summary: "Structured programmes from precision agriculture to agribusiness.",
        body: "Recognising that knowledge and skills are fundamental to sustainable agricultural and rural development, the Society regularly organises structured training programmes, workshops, seminars, and awareness campaigns for its members. These cover a wide range of subjects including modern farming techniques, organic and natural farming, precision agriculture, crop management, livestock development, fisheries, post-harvest management, value addition, food processing, agribusiness management, digital agriculture, financial literacy, and cooperative governance. Exposure visits, on-field demonstrations, and interactions with agricultural experts, research institutions, and government agencies are also facilitated to encourage the adoption of best practices."
      },
      {
        __component: "sections.offer-item",
        title: "Market Intelligence Services",
        summary: "Price trends, demand forecasts and policy updates.",
        body: "The Society provides practical market intelligence support to help members make informed production, marketing, and investment decisions. Timely information on agricultural commodity prices, market demand trends, weather patterns, input costs, export opportunities, and relevant government policies is collected, analysed, and shared with members. Regular updates on price movements, seasonal demand forecasts, and emerging opportunities help farmers and agripreneurs optimise crop planning, identify profitable markets, and improve price realisation. Through these initiatives, the Society aims to reduce market risks and strengthen the economic position of its members."
      }
    ]
  }
};

const collectionData = {
  person: [
    { name: "Mr. Sujan Mathew", role: "Chairman", group: "board", photo: "/sujan_mathew.jpg", photoPosition: "object-[center_30%]", teaser: "25 years across corporate banking, trade finance and branch operations.", bio: "Mr. Sujan Mathew is a seasoned banking and financial services professional with over 25 years of experience across corporate banking, trade finance, commercial banking, and branch operations.", order: 1, published: true },
    { name: "Elby Thomson", role: "MD & CEO", group: "board", photo: "/elby_thomson.jpg", teaser: "22+ years in finance, leading governance and digital transformation.", bio: "Ensures sound corporate governance at operational as well as policy level, he is principally responsible for providing the mandate and leadership for the executive team.", order: 2, published: true },
    { name: "Mr. Rajan K Xavier", role: "Director", group: "board", photo: "/rajan_xavier.jpg", teaser: "28 years in the financial sector; a microfinance pioneer at ESAF.", bio: "Mr. Rajan K Xavier, a stalwart in the financial sector with over 28 years of unwavering dedication, stands as a beacon of transformative leadership and impactful change.", order: 3, published: true },
    { name: "Anish Vijayan", role: "Director", group: "board", photo: "/anish_vijayan.jpg", teaser: "From tribal-colony teacher to award-winning rural development leader.", bio: "Started his career in 1999 as a teacher in a tribal colony in Kanthalloor Panchayath. He was awarded the best teacher under BRC Munnar.", order: 4, published: true },
    { name: "Thirumal Swamy", role: "Director", group: "board", photo: "/thirumal_swamy.jpg", teaser: "Tribal community leader and a pioneer of millets cultivation.", bio: "He hails from Devikulam Taluk, Kanthalloor Village and belongs to the tribal community, born and raised in the scenic surroundings of the Chinnar Wildlife Sanctuary.", order: 5, published: true },
    { name: "Aji Mathew", role: "Director", group: "board", photo: "/aji_mathew.jpg", teaser: "Soft skills and English trainer; heads admissions at Nirmala College.", bio: "Aji Mathew is a dynamic and dedicated Soft Skills and English Trainer with extensive experience in office administration, counselling, teaching, and student development.", order: 6, published: true },
    { name: "Mr. George Varghese", role: "Chief Vigilance Officer", group: "management", photo: "/george_varghese.jpg", teaser: "IPS Superintendent of Police (Retd.), 37 years of service.", bio: "Mr. George Varghese is a distinguished police professional with over 37 years of exemplary service, bringing deep expertise in security strategy, vigilance, and fraud risk management.", order: 7, published: true },
    { name: "Ms. Agnes Minu", role: "Chief Accounts Officer", group: "management", photo: "/agnes_minu.jpg", teaser: "Leads financial reporting, compliance and internal controls.", bio: "Ms. Agnes Minu leads the finance and accounting functions at SICL, with responsibility for financial reporting, compliance, and internal control systems.", order: 8, published: true },
    { name: "Mr. Subash K G", role: "Vice President – Corporate Sales", group: "management", photo: "/subash_kg.jpg", teaser: "Four decades in banking, 35 of them at CSB Bank.", bio: "Mr. Subash K G is a veteran banking professional with over four decades of experience in banking operations, corporate sales, and risk management.", order: 9, published: true },
    { name: "Mr. Jomi De Panakkal", role: "Deputy Vice President – Administration", group: "management", photo: "/jomi_panakkal.jpg", teaser: "28+ years in project financing, HR and compliance.", bio: "Mr. Jomi De Panakkal brings over 28 years of experience in project financing, institutional funding, and financial strategy.", order: 10, published: true }
  ],
  post: [
    { title: "Expanding Agricultural Credit in Southern India", slug: "expanding-agri-credit-south-india", excerpt: "How South Urban Agro is accelerating low-interest credit for smallholders across Kerala and Tamil Nadu.", category: "Finance", author: "Editorial Team", date: "2026-08-10", readTime: "4 min read", order: 1, published: true },
    { title: "Modern Organic Farming Practices & Yield", slug: "modern-organic-farming-practices", excerpt: "Key guidelines for transitioning to high-value organic crops and improving soil health.", category: "Farming", author: "Agri Expert", date: "2026-08-01", readTime: "5 min read", order: 2, published: true }
  ],
  service: [
    { title: "Member Thrift & Contribution Schemes", summary: "Recurring, fixed and long-term savings plans for members.", body: "The Society offers a range of thrift and contribution schemes exclusively for its members to encourage regular savings and disciplined financial planning.", order: 1, published: true },
    { title: "Agricultural Credit & Finance", summary: "Affordable credit for cultivation, irrigation, livestock and mechanisation.", body: "Recognising the genuine credit needs of farmer members, the Society provides timely and affordable agricultural credit for crop cultivation, plantation development, and farm mechanisation.", order: 2, published: true },
    { title: "Gold-Linked Credit Facilities", summary: "Quick liquidity against gold, for members only.", body: "Subject to approved bye-laws, limited gold-linked credit facilities are extended to members to meet urgent agricultural or business requirements.", order: 3, published: true },
    { title: "Farmer Development Programmes", summary: "Workshops and field demonstrations on modern and organic farming.", body: "Regular awareness workshops, field demonstrations, and training sessions on organic farming, water conservation, and soil health management.", order: 4, published: true }
  ],
  notification: [
    { title: "Application for Member Farm Mechanisation & Agri Credit Scheme (2026–27)", date: "07.08.2026 04:37 PM", category: "Financial Scheme", summary: "Inviting short-term credit applications for cultivation, irrigation, livestock, and modern machinery across Kerala and Tamil Nadu units.", hasDownload: true, order: 1, published: true },
    { title: "Disbursement of Organic Fertilizer & Bio-Input Subsidy Batch II", date: "05.08.2026 02:38 PM", category: "Input Supply", summary: "Certified bio-fertilizers and soil health nutrients available at subsidized rates for registered society members.", hasDownload: true, order: 2, published: true },
    { title: "Scheduled System Maintenance – Member Portal & Transaction Interruption", date: "03.08.2026 11:15 AM", category: "System Update", summary: "Online member service portal will undergo scheduled maintenance on Saturday between 11:00 PM and 3:00 AM.", hasDownload: false, order: 3, published: true },
    { title: "Notification for 16th Annual General Meeting (AGM) & Director Elections", date: "01.08.2026 09:30 AM", category: "Governance", summary: "Official notice for members regarding the upcoming Annual General Meeting at District HQ Viyur, Thrissur.", hasDownload: true, order: 4, published: true }
  ],
  "gallery-category": [
    { name: "Operations", order: 1, published: true },
    { name: "Events", order: 2, published: true }
  ],
  "gallery-item": [
    { alt: "Members with their society card at a dairy unit", category: "Operations", order: 1, published: true },
    { alt: "Drone spraying a paddy field", category: "Operations", order: 2, published: true },
    { alt: "A member holding his society card outside his homestead", category: "Events", order: 3, published: true },
    { alt: "A farmer ploughing with bullocks", category: "Events", order: 4, published: true },
    { alt: "Two farmers celebrating in a paddy field", category: "Events", order: 5, published: true },
    { alt: "A farmer sowing across a green paddy field", category: "Operations", order: 6, published: true }
  ]
};

async function seedData(strapi) {
  console.log('🌱 [Seeding] Feeding 100% website content into Strapi via Document Service API...');

  for (const [key, val] of Object.entries(siteData)) {
    const uid = `api::${key}.${key}`;
    try {
      const existing = await strapi.documents(uid).findFirst();
      let doc;
      if (!existing) {
        doc = await strapi.documents(uid).create({ data: val, status: 'draft' });
      } else {
        doc = await strapi.documents(uid).update({ documentId: existing.documentId, data: val, status: 'draft' });
      }
      if (doc?.documentId) {
        await strapi.documents(uid).publish({ documentId: doc.documentId });
      }
      console.log(` ✅ [SingleType] Seeded (Draft & Published): ${key}`);
    } catch (e) {
      console.warn(` ⚠️ Could not seed SingleType ${key}:`, e.message);
    }
  }

  for (const [slug, items] of Object.entries(collectionData)) {
    const uid = `api::${slug}.${slug}`;
    try {
      const existingList = await strapi.documents(uid).findMany({ status: 'draft' });
      for (const item of items) {
        const existing = (existingList || []).find(
          (d) =>
            (item.slug && d.slug === item.slug) ||
            (item.title && d.title === item.title) ||
            (item.name && d.name === item.name) ||
            (item.alt && d.alt === item.alt)
        );
        let payload = { ...item };
        if (slug === 'gallery-item' && item.category) {
          const cat = await strapi.documents('api::gallery-category.gallery-category').findFirst({
            filters: { name: item.category },
          });
          if (cat?.documentId) {
            payload.gallery_category = cat.documentId;
          }
        }
        let doc;
        if (!existing) {
          doc = await strapi.documents(uid).create({ data: payload, status: 'draft' });
        } else {
          doc = await strapi.documents(uid).update({ documentId: existing.documentId, data: payload, status: 'draft' });
        }
        if (doc?.documentId) {
          await strapi.documents(uid).publish({ documentId: doc.documentId });
        }
      }
      console.log(` ✅ [CollectionType] Seeded (Draft & Published): ${slug} (${items.length} items)`);
    } catch (e) {
      console.warn(` ⚠️ Could not seed CollectionType ${slug}:`, e.message);
    }
  }

  console.log('🎉 [Strapi Data Seed] 100% Complete (Populated in both DRAFT & PUBLISHED states)!');
}

module.exports = seedData;
