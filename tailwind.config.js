/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          text: '#fff'
        },
        light:{
          background: '#ffffff',
          text: '#612a32'
        }
      }
    },
  },
  plugins: [],
}

