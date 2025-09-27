/**
 * Sitemap Generator for Cardigan Lane Solutions
 * Automatically generates sitemap.xml based on site structure
 */

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://clsolutions.tech';
const TODAY = new Date().toISOString().split('T')[0];

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const sitemapEntries: SitemapEntry[] = [
  {
    loc: `${DOMAIN}/`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    loc: `${DOMAIN}/#about`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: `${DOMAIN}/#services`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: 0.9
  },
  {
    loc: `${DOMAIN}/#products`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: `${DOMAIN}/#testimonials`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: `${DOMAIN}/#contact`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: 0.9
  },
  {
    loc: `${DOMAIN}/privacy`,
    lastmod: TODAY,
    changefreq: 'yearly',
    priority: 0.5
  }
];

function generateSitemap(): string {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';

  const urls = sitemapEntries.map(entry => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n  \n');

  return `${xmlHeader}
${urlsetOpen}
  ${urls}
${urlsetClose}`;
}

function updateSitemap(): void {
  const sitemap = generateSitemap();
  const publicDir = path.join(process.cwd(), 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');

  try {
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    console.log('✅ Sitemap updated successfully!');
    console.log(`📍 Location: ${sitemapPath}`);
    console.log(`🔗 URL: ${DOMAIN}/sitemap.xml`);
  } catch (error) {
    console.error('❌ Error updating sitemap:', error);
  }
}

// Run the sitemap generator
if (require.main === module) {
  updateSitemap();
}

module.exports = { generateSitemap, updateSitemap, sitemapEntries };