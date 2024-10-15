/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/tailwind.css", "./*.html", "./js/**/*.js"],
darkMode: 'class', // Enable dark mode via class
theme: {
  extend: {
    colors: {           
      'neutral': "#f9f9ff",
      'on-neutral': "#171717",
      'on-neutral-tint': "#403F40",
      'on-neutral-nav': "#5d5c5d",
      'outline-neutral': "#e0e0e5",
      'dark-neutral': "#2e2e2e",
      'on-dark-neutral': "#a3a2a3",
      'oxy': "#3e5f90",
      'sto': "#725188",
      'dev': "#046B5C",
      'sys': "#8F4953",
      'dev-con': "#A0F2DF",
      'sys-con': "#FFD9DC",
      'sto-con': "#F3DAFF",
      'devs': {
        400: "#6e9574",
        500: "#54785B",
        600: "#405c46",
      },
    },
    fontSize:{
      title: '1.618rem',
      footer: '0.618rem',
    },
    fontFamily: {
      'inter': ['InterVariable, ui-sans-serif, system-ui, sans-serif'],
      'nunito': ['Nunito, ui-sans-serif, system-ui, sans-serif'],
      'jet': ['JetBrains, monospace '],
    },
    keyframes: {
      spinner : {
      'from' : {transfrom: 'rotate(0deg)'},
      'to' : {transform: 'rotate(360deg)'},  
    },
    },
    animation: {
      spinner: 'spinner 1s linear 1',
      spinner05: 'spinner .5s linear 1',
    },
    borderWidth:{
      '1': "1px",
    },
    minHeight: {
      'vhHeader': 'calc(100vh - 3.875rem)',
    },
    spacing: {
      'f1': '61.8%',
      'f2':'19.1%',
    },
  },
},
plugins: [],
}

