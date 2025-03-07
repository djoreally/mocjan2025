/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://momsoilchange.com",
  additionalPaths: [
    "/services",
    "/about",
    "/contact",
    "/blog",
    "/faq",
    "/magazine",
    "/privacy",
    "/terms",
    "/fleet-maintenance",
    "/motor-oil-lookup",
    "/the-top-5-motor-oils-in-the-world",
    "/oil-change-near-ambler-pa",
    "/membership",
    "/franchise",
  ],
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"], // Exclude server-side sitemap
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://momsoilchange.com/server-sitemap.xml", // Add server-side sitemap
    ],
  },
}
