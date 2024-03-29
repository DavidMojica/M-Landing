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
        purpleVeryDark: '#100C2A',
      },
      height:{
        extra: '150%',
      },
      width:{
        extra: '130%',
      },
      spacing:{
        mini: '12%',
        med: '40%',
        hg: '60%',
        extra: '80%',
        a142: '36rem',
      },
      fontSize:{
        a7xl: '86px',
      }
    },
  },
  plugins: [],
}

