/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    color: {
      "hero-black": "rgba(0,0,0,0.99)",
    },
    extend: {
      backgroundImage: {
        "hero-bg-desktop": "url('/assets/images/MainHeroImage.png')",
        "hero-bg-mobile": "url('/assets/images/MainHeroImageSmall.png')",
      },
    },
  },
  plugins: [],
};
