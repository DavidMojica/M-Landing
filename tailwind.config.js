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
        semidark: '#333333',
        purpleDark: '#2b1055',
        purpleDarkSecondary: '#7597de',
      },
      height:{
        extra: '110%',
        
      },
      width:{
        extra: '110%',

        
      },
      spacing:{
        mini: '12%',
      }
    },
  },
  plugins: [],
}

