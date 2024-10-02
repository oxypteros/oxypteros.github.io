/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/tailwind.css", "./*.html", "./js/**/*.js"],
darkMode: 'class', // Enable dark mode via class
theme: {
  extend: {
    colors: {           
      'pri': {
        100: "#fcfcfc",          
        200: "#e2e2e2",          
        300: "#c9c9c9",          
        400: "#b0b0b0",          
        500: "#979797",          
        600: "#7e7e7e",    
        700: "#646464",
        800: "#4b4b4b",     
        900: "#323232",       
      },
      'dev': {
        500: "#54785B",
      }
    },
    fontFamily: {
      'inter': ['InterVariable, ui-sans-serif, system-ui, sans-serif'],
    },
    keyframes: {
      spinner : {
      'from' : {transfrom: 'rotate(0deg)'},
      'to' : {transform: 'rotate(360deg)'},  
    }
    },
    animation: {
      spinner: 'spinner 1s linear 1',
    },
    borderWidth:{
      '1': "1px",
    }
  },
},
plugins: [],
}

