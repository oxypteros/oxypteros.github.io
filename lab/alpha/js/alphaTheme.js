'use strict';
/* 
* alphaTheme.js (Color theme changer for alpha theme) - v0.0.1 - MIT License - oxypteros.com/designs/alpha 
*/

const btnDark = document.querySelector('.btnDarkJs');
const btnLight = document.querySelector('.btnLightJs');
// Check for CSS support for alpha Dark
let supportCSS = CSS.supports('color', 'var(--bgc)');

// If alpha Dark supported by CSS enable, else hide button
if ((supportCSS = true)) {
  // Browser setting to dark/light
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // User preference dark/light/null
  let alphaDark = localStorage.getItem('alpha-dark');

  // If visitor had already selected dark, set preference to dark, change alpha Dark to dark
  if (alphaDark === 'true') {
    document.body.classList.toggle('alpha-dark');
  }
  // If first time visitor check browser for color theme and pass it to storage
  if (alphaDark === null && prefersDarkScheme === true) {
    document.body.classList.toggle('alpha-dark');
    localStorage.setItem('alpha-dark', 'true');
  }
  
  if (btnDark) {
    function changeAlphaTheme() {
      let alphaDark = localStorage.getItem('alpha-dark');
      if (alphaDark === 'true') {
        document.body.classList.toggle('alpha-dark');
        localStorage.setItem('alpha-dark', 'false');
      } else {
        document.body.classList.toggle('alpha-dark');
        localStorage.setItem('alpha-dark', 'true');
      }
    }
    // Button Event Listener
    btnDark.addEventListener('click', changeAlphaTheme);
  }
} else {
  btnDark.classList.add('hide'); // If browser don't support alpha Dark hide the change theme button.
}
/*
 * END alphaTheme.js
 */