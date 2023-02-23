/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#0A0A0A",
        secondary : "#ffbe33",
      },
      fontFamily : {
        Unbounded : ['Unbounded', 'cursive'],
      }
    }
  },
  plugins: [],
}