/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://momsoilchange.com",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"], // Exclude server-side sitemap
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://momsoilchange.com/server-sitemap.xml", // Add server-side sitemap
    ],
  },
}

