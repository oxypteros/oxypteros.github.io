'use strict';

// Check for CSS support for oxy-theme
let supportCSS = CSS.supports('color', 'var(--bgc)');

// If oxy-theme supported by CSS enable else hide button
if (supportCSS = true) {
  // Browser is set to dark true/false
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // User preference dark/light/null
  let oxyTheme = localStorage.getItem('oxy-theme');
console.log(oxyTheme)
  // Check user/browser choice and pass it to local storage
  if (oxyTheme === null && prefersDarkScheme === true ) {
    document.documentElement.setAttribute('oxy-theme', 'dark')
    localStorage.setItem('oxy-theme', 'dark');
    console.log('SET DEFAULT TO DARK')
  } else if(oxyTheme === null && prefersDarkScheme === false){
    localStorage.setItem('oxy-theme', 'light');
    console.log('SET DEFAULT TO LIGHT')
  }