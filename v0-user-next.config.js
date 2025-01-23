/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  siteUrl: "https://momsoilchange.com",
  experimental: {
    optimizeCss: true,
    optimizeImages: true,
  },
  env: {
    NEXT_PUBLIC_ANALYTICS_KEY: process.env.NEXT_PUBLIC_ANALYTICS_KEY,
    SMTP_HOST: "smtp.resend.com",
    SMTP_PORT: 465,
    SMTP_USER: "resend",
    SMTP_PASS: "re_F4y6gezm_GdKocPSm2QheFewTFxn7EJH6",
    EMAIL_FROM: "contact@mobileoilchangenetwork.com",
  },
}

module.exports = nextConfig

