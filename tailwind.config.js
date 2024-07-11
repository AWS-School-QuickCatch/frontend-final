/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBackground: 'linear-gradient(to bottom right, rgba(241, 234, 255, 0.5), rgba(208, 162, 248, 0.5));'
      }
    },
  },
  variants: {},
  plugins: [],
}