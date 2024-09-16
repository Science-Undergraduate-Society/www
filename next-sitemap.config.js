module.exports = {
    siteUrl: 'https://susubc.ca', // Replace with your site URL
    generateRobotsTxt: true, // Generates a robots.txt file along with the sitemap
    changefreq: 'daily', // Frequency of change
    priority: 0.7, // Default priority of URLs
    sitemapSize: 5000, // Maximum number of URLs per sitemap file
    exclude: ['/secret-page'], // Exclude specific pages if needed
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' }, // Allow all bots to crawl
      ],
    },
  };