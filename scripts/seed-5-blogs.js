const path = require("path");
const Strapi = require("@strapi/strapi");

async function run() {
  const app = await Strapi.createStrapi({ appDir: path.join(__dirname, "..") }).load();
  const posts = [
    {
      title: "New Government Subsidies Available for Cooperative Members",
      slug: "government-subsidies-for-cooperative-members",
      excerpt: "A breakdown of the latest agricultural support schemes and how South Urban members can apply.",
      category: "Schemes & Subsidies",
      author: "Member Services Desk",
      date: "2026-08-04",
      readTime: "4 min read",
      order: 1,
      published: true,
      publishedAt: new Date(),
      body: [
        { kind: "p", text: "A fresh round of central and state agricultural support has opened for the 2026–27 cycle, and a good share of it is reachable through a registered cooperative rather than by individual application." },
        { kind: "h2", text: "What is on offer this cycle" },
        { kind: "list", items: ["Farm mechanisation support — part-funding on tillers, transplanters, sprayers and small harvesting equipment.", "Bio-input and soil health assistance — subsidised organic manures, bio-fertilisers and micronutrients.", "Irrigation and water conservation — assistance on drip and sprinkler systems, farm ponds and pump sets."] },
        { kind: "h2", text: "How to apply" },
        { kind: "p", text: "Speak to your unit's field officer or visit the Society office at Viyur with your membership number." }
      ]
    },
    {
      title: "Rabi Season Price Outlook: What Farmers Should Prepare For",
      slug: "rabi-season-price-outlook",
      excerpt: "Commodity price forecasts for the upcoming Rabi season, and what they mean for planting decisions.",
      category: "Market Intelligence",
      author: "Market Intelligence Desk",
      date: "2026-07-22",
      readTime: "3 min read",
      order: 2,
      published: true,
      publishedAt: new Date(),
      body: [
        { kind: "p", text: "Planting decisions made in the next few weeks will be settled at prices set months from now." },
        { kind: "h2", text: "Key Market Trends" },
        { kind: "list", items: ["Pulses continue to hold firm, supported by steady demand.", "Paddy remains stable, with procurement providing a floor.", "Spices remain the strongest margin opportunity for members with the land and patience for a longer cycle."] }
      ]
    },
    {
      title: "How Precision Agriculture is Changing Indian Cooperatives",
      slug: "precision-agriculture-indian-cooperatives",
      excerpt: "Drone mapping, soil sensors, and AI-powered advisory tools are entering the field — and cooperatives are how smallholders reach them.",
      category: "Technology",
      author: "Field Operations Desk",
      date: "2026-07-09",
      readTime: "4 min read",
      order: 3,
      published: true,
      publishedAt: new Date(),
      body: [
        { kind: "p", text: "Precision agriculture has a reputation as something for large holdings. Through a cooperative, it stops being true, and that is the shift worth paying attention to." },
        { kind: "h2", text: "Shared Machinery & Services" },
        { kind: "p", text: "A spraying drone is out of reach for a two-acre holding and entirely sensible across two hundred acres of member land." }
      ]
    },
    {
      title: "South Urban Members Win State Cooperative Excellence Award",
      slug: "state-cooperative-excellence-award",
      excerpt: "Our member network was recognised for outstanding contribution to farmer welfare across Kerala and Tamil Nadu.",
      category: "Society News",
      author: "Communications Desk",
      date: "2026-06-28",
      readTime: "3 min read",
      order: 4,
      published: true,
      publishedAt: new Date(),
      body: [
        { kind: "p", text: "The Society's member network has been recognised with a State Cooperative Excellence Award for its contribution to farmer welfare." },
        { kind: "h2", text: "Award Citation Highlights" },
        { kind: "list", items: ["Input supply extended into remote hamlets.", "A measurable shift from informal moneylenders to Society credit terms.", "Sustained participation in farmer training and field demonstration programmes."] }
      ]
    },
    {
      title: "Expanding Low-Interest Agricultural Credit in Southern India",
      slug: "expanding-low-interest-agri-credit-south-india",
      excerpt: "How South Urban Agro is accelerating low-interest micro-finance and farm credit for smallholders across Kerala and Tamil Nadu.",
      category: "Finance & Credit",
      author: "Credit Operations Team",
      date: "2026-06-15",
      readTime: "5 min read",
      order: 5,
      published: true,
      publishedAt: new Date(),
      body: [
        { kind: "p", text: "Access to affordable credit is the foundation of agricultural productivity. South Urban Agro continues to provide low-interest credit tailored for small and marginal farmers." }
      ]
    }
  ];

  for (const post of posts) {
    const existing = await app.db.query("api::post.post").findOne({ where: { slug: post.slug } });
    if (!existing) {
      await app.db.query("api::post.post").create({ data: post });
      console.log(`Created post: ${post.title}`);
    } else {
      await app.db.query("api::post.post").update({ where: { id: existing.id }, data: post });
      console.log(`Updated post: ${post.title}`);
    }
  }

  process.exit(0);
}

run();
