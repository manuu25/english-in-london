/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        royal: "#012169",
        red: "#C8102E",
        white: "#FFFFFF",
        lightBlue: "#E6F2FF",
        lightRed: "#FFE6EA",
        navy: "#001A4D",
        darkRed: "#A00D26",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        script: ["Caveat", "cursive"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
