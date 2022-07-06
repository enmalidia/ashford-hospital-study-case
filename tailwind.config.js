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
        mediumBlue: '#01426a',
        lightGray: '#8994A7',
        darkGray: '#27364B',
        grayBackground:'#eff3f8',
        blueBackground:'#01426a',
        ligthGrayBackground:'#cbd4e1',
        grayMenu:'#f6f8fc'
      },
      screens:{
        'xs': '360px',
        ...defaultTheme.screens
      },
      container: {
        center: true,
        /*padding: '2rem'*/
      },      
    },
  },
  plugins: [],
}
