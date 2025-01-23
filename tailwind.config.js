const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f0ff",
          100: "#cce0ff",
          200: "#99c2ff",
          300: "#66a3ff",
          400: "#3385ff",
          500: "#0066ff",
          600: "#0052cc",
          700: "#003d99",
          800: "#002966",
          900: "#001433",
        },
        secondary: {
          50: "#f0f5ff",
          100: "#e5eeff",
          200: "#cdddff",
          300: "#b4cbff",
          400: "#9bb9ff",
          500: "#82a7ff",
          600: "#6885cc",
          700: "#4e6499",
          800: "#344266",
          900: "#1a2133",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}

