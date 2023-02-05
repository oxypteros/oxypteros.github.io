'use strict';
/*
Oxy Theme
*/
// Check for CSS support for oxy-theme
let supportCSS = CSS.supports('color', 'var(--bgc)');
// If oxy-theme supported by CSS enable else hide button
if (supportCSS = true) {
  // Browser is set to dark true/false
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // User preference dark/light/null
  let oxyTheme = localStorage.getItem('oxy-theme');
  // If new visitor check browser for color theme and pass it to storage
  if (oxyTheme === null && prefersDarkScheme === true ) {
    document.documentElement.setAttribute('oxy-theme', 'dark')
    localStorage.setItem('oxy-theme', 'dark');
  } else if(oxyTheme === null && prefersDarkScheme === false){
    localStorage.setItem('oxy-theme', 'light');
  }
  // If user already set preference to dark change oxy-theme to dark
  if(oxyTheme === 'dark'){
    document.documentElement.setAttribute('oxy-theme', 'dark');
  }
} else {
  btnScheme.classList.add('hidden');// If browser don't support Oxy Theme hide the change theme button.
}
/*
* END Oxy Theme
*/