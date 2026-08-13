/**
 * Auto-populates all 23 clean Strapi Content-Types with default copy from frontend/data/site.ts
 */

const site = {
  HERO: {
    badge: "Government of India Registered",
    title: "Rooted in Community, Growing for Tomorrow",
    subtitle: "South Urban Agro Multi State Co-operative Society Ltd. empowers farmers, small producers and rural households across South India with credit, modern agricultural inputs and direct market links.",
    actionText: "Explore Member Services",
    actionUrl: "#services",
    bgImage: "/hero_banner.jpg"
  },
  WHO_WE_ARE: {
    tag: "Who We Are",
    title: "A Member-Owned Movement for Agriculture and Rural Credit",
    description1: "South Urban Agro Multi State Co-operative Society Ltd. was constituted to bridge the capital and market gap for primary agricultural producers in Southern India.",
    description2: "Operating under the Multi-State Co-operative Societies Act, 2002, we combine grassroots democratic governance with modern financial administration.",
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
    ]
  },
  NOTICE: {
    text: "Notice: 14th Annual General Body Meeting scheduled for 28th September 2026 at the Registered Office.",
    categories: ["AGM", "Dividends", "Tenders"]
  },
  CONTACT: {
    phone: "+91 484 238 4900",
    email: "info@southurbanagro.com",
    address: "South Urban Agro Multi State Co-operative Society Ltd., Door No. 39/4112-B, MG Road, Ernakulam, Kochi, Kerala — 682016"
  },
  COMPANY_DETAILS: {
    regNo: "MSCS/CR/1284/2022",
    title: "South Urban Agro Multi State Co-operative Society Ltd.",
    subtitle: "Multi-State Co-operative Society Registered under MSCS Act, 2002",
    address: "Door No. 39/4112-B, MG Road, Ernakulam, Kochi, Kerala — 682016",
    phone: "+91 484 238 4900",
    email: "info@southurbanagro.com",
    gst: "32AAALS4900K1Z5",
    mapUrl: "https://maps.google.com/?q=Ernakulam+Kochi+Kerala",
    acts: ["Multi-State Co-operative Societies Act, 2002", "MSCS Rules, 2002"],
    bullets: [
      "Registered with the Central Registrar of Co-operative Societies, Ministry of Cooperation, New Delhi.",
      "Area of operation covers Kerala, Tamil Nadu, and Karnataka.",
      "Subject to annual statutory audit by empanelled Chartered Accountants."
    ]
  },
  OVERVIEW: {
    tag: "Overview",
    title: "Democratic Governance, Financial Strength",
    intro: "South Urban Agro operates on universal cooperative principles.",
    paragraphs: [
      "Our primary mandate is to provide timely, affordable credit and modern farming inputs.",
      "Through transparent financial practices and democratic member control, we ensure sustainable growth."
    ]
  },
  VISION: {
    title: "Our Vision",
    statement: "To be Southern India’s most trusted multi-state agricultural cooperative."
  },
  MISSION: {
    title: "Our Mission",
    statement: "To empower farmers through financial inclusion, value chain integration, and digital technology.",
    bullets: [
      "Deliver affordable credit directly to primary agricultural producers.",
      "Establish direct market access to eliminate middleman margins.",
      "Promote organic farming practices and sustainable technology."
    ]
  },
  OBJECTIVES: {
    tag: "Objectives",
    title: "Key Cooperative Objectives",
    items: [
      { title: "Agricultural Credit", desc: "Providing short and medium term credit facilities." },
      { title: "Input Distribution", desc: "Supplying certified seeds, fertilizers and machinery." },
      { title: "Produce Marketing", desc: "Connecting farmers with institutional buyers." }
    ]
  },
  GOALS: {
    tag: "Strategic Goals",
    title: "Target Milestones 2026-2030",
    intro: "Expanding reach across Southern India.",
    items: [
      { title: "Member Growth", desc: "Reach 100,000 active farming members." },
      { title: "Branch Expansion", desc: "Open 50 new service centres in rural hubs." }
    ]
  },
  VALUES: {
    tag: "Core Values",
    title: "Guided by Ethical Principles",
    intro: "The core values driving our everyday operations.",
    items: [
      { title: "Integrity", desc: "Complete transparency in all financial dealings." },
      { title: "Member First", desc: "Every member has an equal voice." },
      { title: "Innovation", desc: "Adopting modern fintech tools for seamless service." }
    ]
  },
  MEMBERSHIP: {
    tag: "Membership",
    title: "Join the Cooperative",
    intro: "Open to agricultural producers, self-help groups, and rural residents.",
    who: [
      { title: "Individual Farmers", desc: "Owning or cultivating agricultural land." },
      { title: "Self-Help Groups", desc: "Registered farming collectives." }
    ],
    rights: [
      { title: "Voting Rights", desc: "One member, one vote." },
      { title: "Dividend Eligibility", desc: "Share in annual surplus distribution." }
    ]
  },
  COOP_PRINCIPLES: {
    tag: "Principles",
    title: "7 International Cooperative Principles",
    intro: "We adhere strictly to ICA global cooperative standards.",
    items: [
      { title: "Voluntary Membership", desc: "Open to all without discrimination." },
      { title: "Democratic Control", desc: "Controlled by members who actively participate." }
    ]
  },
  COOP_ACTIVITIES: {
    tag: "Activities",
    title: "Core Operational Activities",
    intro: "Supporting the agricultural lifecycle.",
    items: [
      { title: "Deposit Schemes", desc: "Attractive interest rates for rural savings." },
      { title: "Agri Machinery Rental", desc: "Affordable access to tractors and harvesters." }
    ]
  },
  BLOG_INTRO: {
    label: "News & Insights",
    title: "Updates from South Urban Agro",
    intro: "Read our latest announcements, market analysis, and farming guides."
  },
  SOCIALS: {
    items: [
      { name: "Facebook", href: "https://facebook.com" },
      { name: "Instagram", href: "https://instagram.com" },
      { name: "LinkedIn", href: "https://linkedin.com" }
    ]
  },
  NAV_LINKS: {
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "#services" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "#contact" }
    ]
  },
  BRANDING: {
    logo: "/logo_official.png"
  }
};

const collections = {
  person: [
    { name: "Mr. Sujan Mathew", role: "Chairman", group: "board", photo: "/sujan_mathew.jpg", photoPosition: "object-[center_30%]", teaser: "25 years across corporate banking, trade finance and branch operations.", bio: "Mr. Sujan Mathew is a seasoned banking and financial services professional with over 25 years of experience across corporate banking, trade finance, commercial banking, and branch operations.", order: 1, published: true },
    { name: "Elby Thomson", role: "MD & CEO", group: "board", photo: "/elby_thomson.jpg", teaser: "22+ years in finance, leading governance and digital transformation.", bio: "Ensures sound corporate governance at operational as well as policy level, he is principally responsible for providing the mandate and leadership for the executive team.", order: 2, published: true },
    { name: "Mr. Rajan K Xavier", role: "Director", group: "board", photo: "/rajan_xavier.jpg", teaser: "28 years in the financial sector; a microfinance pioneer at ESAF.", bio: "Mr. Rajan K Xavier, a stalwart in the financial sector with over 28 years of unwavering dedication, stands as a beacon of transformative leadership and impactful change.", order: 3, published: true },
    { name: "Anish Vijayan", role: "Director", group: "board", photo: "/anish_vijayan.jpg", teaser: "From tribal-colony teacher to award-winning rural development leader.", bio: "Started his career in 1999 as a teacher in a tribal colony in Kanthalloor Panchayath. He was awarded the best teacher under BRC Munnar.", order: 4, published: true },
    { name: "Thirumal Swamy", role: "Director", group: "board", photo: "/thirumal_swamy.jpg", teaser: "Tribal community leader and a pioneer of millets cultivation.", bio: "He hails from Devikulam Taluk, Kanthalloor Village and belongs to the tribal community, born and raised in the scenic surroundings of the Chinnar Wildlife Sanctuary.", order: 5, published: true },
    { name: "Aji Mathew", role: "Director", group: "board", photo: "/aji_mathew.jpg", teaser: "Soft skills and English trainer; heads admissions at Nirmala College.", bio: "Aji Mathew is a dynamic and dedicated Soft Skills and English Trainer with extensive experience in office administration, counselling, teaching, and student development.", order: 6, published: true },
    { name: "Mr. George Varghese", role: "Chief Vigilance Officer", group: "management", photo: "/george_varghese.jpg", teaser: "IPS Superintendent of Police (Retd.), 37 years of service.", bio: "Mr. George Varghese is a distinguished police professional with over 37 years of exemplary service, bringing deep expertise in security strategy, vigilance, and fraud risk management.", order: 7, published: true },
    { name: "Ms. Agnes Minu", role: "Chief Accounts Officer", group: "management", photo: "/agnes_minu.jpg", photoPosition: "object-top", teaser: "Leads financial reporting, compliance and internal controls.", bio: "Ms. Agnes Minu leads the finance and accounting functions at SICL, with responsibility for financial reporting, compliance, and internal control systems.", order: 8, published: true },
    { name: "Mr. Subash K G", role: "Vice President – Corporate Sales", group: "management", photo: "/subash_kg.jpg", teaser: "Four decades in banking, 35 of them at CSB Bank.", bio: "Mr. Subash K G is a veteran banking professional with over four decades of experience in banking operations, corporate sales, and risk management.", order: 9, published: true },
    { name: "Mr. Jomi De Panakkal", role: "Deputy Vice President – Administration", group: "management", photo: "/jomi_panakkal.jpg", teaser: "28+ years in project financing, HR and compliance.", bio: "Mr. Jomi De Panakkal brings over 28 years of experience in project financing, institutional funding, and financial strategy.", order: 10, published: true }
  ],
  post: [
    { title: "New Government Subsidies Available for Cooperative Members", slug: "government-subsidies-for-cooperative-members", excerpt: "A breakdown of the latest agricultural support schemes and how South Urban members can apply.", category: "Schemes & Subsidies", author: "Member Services Desk", date: "2026-08-04", readTime: "4 min read", order: 1, published: true },
    { title: "Rabi Season Price Outlook: What Farmers Should Prepare For", slug: "rabi-season-price-outlook", excerpt: "Commodity price forecasts for the upcoming Rabi season, and what they mean for planting decisions.", category: "Market Intelligence", author: "Market Intelligence Desk", date: "2026-07-22", readTime: "3 min read", order: 2, published: true },
    { title: "How Precision Agriculture is Changing Indian Cooperatives", slug: "precision-agriculture-indian-cooperatives", excerpt: "Drone mapping, soil sensors, and AI-powered advisory tools are entering the field — and cooperatives are how smallholders reach them.", category: "Technology", author: "Field Operations Desk", date: "2026-07-09", readTime: "4 min read", order: 3, published: true },
    { title: "South Urban Members Win State Cooperative Excellence Award", slug: "state-cooperative-excellence-award", excerpt: "Our member network was recognised for outstanding contribution to farmer welfare across Kerala and Tamil Nadu.", category: "Society News", author: "Communications Desk", date: "2026-06-28", readTime: "3 min read", order: 4, published: true },
    { title: "Expanding Low-Interest Agricultural Credit in Southern India", slug: "expanding-low-interest-agri-credit-south-india", excerpt: "How South Urban Agro is accelerating low-interest micro-finance and farm credit for smallholders across Kerala and Tamil Nadu.", category: "Finance & Credit", author: "Credit Operations Team", date: "2026-06-15", readTime: "5 min read", order: 5, published: true }
  ],
  service: [
    { title: "Agricultural Loans", summary: "Short and medium term loans for crop cultivation.", body: "Flexible repayment terms tied to harvest cycles with competitive interest rates.", order: 1, published: true },
    { title: "Member Savings & Fixed Deposits", summary: "High-yield term deposits for cooperative members.", body: "Secure savings accounts backed by transparent auditing and competitive interest.", order: 2, published: true },
    { title: "Farm Produce Marketing", summary: "Direct buyer connection eliminating middleman fees.", body: "Assisting members in grading, packaging and selling crops at fair market prices.", order: 3, published: true }
  ],
  notification: [
    { title: "14th Annual General Body Meeting Notice", date: "28.09.2026", category: "AGM", summary: "AGM scheduled at Registered Office, Kochi.", hasDownload: true, order: 1, published: true },
    { title: "Dividend Disbursement for FY 2025-26", date: "15.08.2026", category: "Dividends", summary: "8.5% dividend credited to member accounts.", hasDownload: false, order: 2, published: true }
  ],
  "gallery-item": [
    { src: "/hero_banner.jpg", alt: "Member Farmers Gathering", category: "Events", order: 1, published: true },
    { src: "/hero_banner.jpg", alt: "Organic Crop Harvesting", category: "Operations", order: 2, published: true }
  ]
};

async function seedData(strapi) {
  console.log('🌱 Starting baseline content seed into Strapi...');

  for (const [key, val] of Object.entries(site)) {
    const apiName = key.toLowerCase().replace(/_/g, '-');
    try {
      const existing = await strapi.documents(`api::${apiName}.${apiName}`).findFirst();
      if (!existing) {
        await strapi.documents(`api::${apiName}.${apiName}`).create({ data: val, status: 'published' });
        console.log(`[Seeded SingleType] ${apiName}`);
      }
    } catch (e) {
      // Ignore if document service signature differs
    }
  }

  for (const [slug, items] of Object.entries(collections)) {
    try {
      const count = await strapi.documents(`api::${slug}.${slug}`).count();
      if (count === 0) {
        for (const item of items) {
          await strapi.documents(`api::${slug}.${slug}`).create({ data: item, status: 'published' });
        }
        console.log(`[Seeded CollectionType] ${slug} (${items.length} rows)`);
      }
    } catch (e) {
      // Ignore if document service signature differs
    }
  }

  console.log('✅ [Strapi Baseline Seed] Complete!');
}

module.exports = seedData;
