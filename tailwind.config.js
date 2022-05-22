const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: {
    enabled: false
  }, 
  darkMode: 'class', 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Futura Std': ['Futura Std','sans-serif'],
        'Untitled Sans': ['Untitled Sans','sans-serif'],
      },
      colors:{
        primary: '#3EB1C8',
        secondary:'#002554',
        lightGray: '#8994A7',
        darkGray: '#27364B'
      },
      screens:{
        'xs': '360px',
        ...defaultTheme.screens
      },      
    },
  },
  plugins: [],
}
