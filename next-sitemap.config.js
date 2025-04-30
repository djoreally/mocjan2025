/** @type {import('next-sitemap').IConfig} */
const fs = require('fs');
const path = require('path');

const blogDirectory = path.join(__dirname, 'app', 'blog');

function getBlogPaths() {
  return fs.readdirSync(blogDirectory)
    .filter(file => file.endsWith('.tsx') || file.endsWith('.md')) // Adjust based on your file types
    .map(file => `/blog/${file.replace(/\.tsx|\.md$/, '')}`); // Remove file extension
}

module.exports = {
  siteUrl: "https://momsoilchange.com",
  additionalPaths: [
    "/services",
    "/about",
    "/contact",
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
    "/oil-change",
    "/mobile-oil-change",
    "/oil-change-service",
    "/mobile-oil-change-near-me",
    "/oil-change-near-me",
    "/on-site-oil-change",
    "/mobile-oil-change-service",
    "/mobile-oil-change-business",
    "/oil-change-home-service",
    "/oil-change-at-home-service",
    ...getBlogPaths(), // Include dynamically generated blog paths
  ],
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"], // Exclude server-side sitemap
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://momsoilchange.com/server-sitemap.xml", // Add server-side sitemap
    ],
  },
}
