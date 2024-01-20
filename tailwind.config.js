/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow:{
        'white': [
          '0 35px 35px rgba(255, 255, 255, 0.25)',
          '0 45px 65px rgba(255, 255, 255, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}

