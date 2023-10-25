/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "hero-section-bg-image":"url('/src/static/images/hero-section-bg-image.jpg')",
        "hero-section-bg-image-mobile":"url('/src/static/images/hero-section-bg-image-mobile.jpg')",
      }
    },
  },
  plugins: [],
}