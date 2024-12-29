/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nsans-light': ['Nsans Light'],
        'nsans-medium': ['Nsans Medium'],
        'nsans-bold': ['Nsans Bold'],
        'nsans-regular': ['Nsans Regular']
      },
      backgroundImage: {
        'hero-banner': "linear-gradient(to right bottom, rgba(6 6 6 / 80%), rgba(6 6 6 / 80%)), url('./src/assets/images/banner-img.jpg')",
        'hero-banner-login': "linear-gradient(to right bottom, rgba(6 6 6 / 40%), rgba(6 6 6 / 40%)), url('./src/assets/images/banner-img.jpg')",
      },      
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
