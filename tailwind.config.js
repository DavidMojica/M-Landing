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
        semidark: '#333333'
      }
    },
  },
  plugins: [],
}

