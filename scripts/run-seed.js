/**
 * Standalone seed loader for Strapi 5.
 * Loads environment variables from .env and initialises Strapi from dist/ build.
 */
require('dotenv').config();

const path = require('path');
const { createStrapi } = require('@strapi/strapi');

async function main() {
  console.log('🚀 Loading Strapi application to seed baseline data...');
  const appDir = path.join(__dirname, '..');
  const distDir = path.join(appDir, 'dist');
  
  // Use dist if built, otherwise load app
  const app = await createStrapi({ appDir, distDir }).load();
  
  const seedData = require('./seed-strapi-full.js');
  await seedData(app);
  
  await app.destroy();
  console.log('🎉 Data seeding complete!');
  process.exit(0);
}

main().catch((err) => {
  console.error('❌ Error during seeding:', err);
  process.exit(1);
});
