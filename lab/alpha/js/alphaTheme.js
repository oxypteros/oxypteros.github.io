'use strict';
/* 
* alphaTheme.js (Color theme changer for alpha theme) - v0.0.1 - MIT License - oxypteros.com/designs/alpha 
*/
const themeBtn = document.querySelector('.themeBtn');
const btnLight = document.querySelector('.btnLightJs');

let supportCSS = CSS.supports('color', 'var(--bgc)');

if ((supportCSS = true)) {

  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let alphaDark = localStorage.getItem('alpha-dark');

  if (alphaDark === 'true') {
    document.body.classList.toggle('alpha-dark');
  }

  if (alphaDark === null && prefersDarkScheme === true) {
    document.body.classList.toggle('alpha-dark');
    localStorage.setItem('alpha-dark', 'true');
  }
  
  if (themeBtn) {
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
  
    themeBtn.addEventListener('click', changeAlphaTheme);
  }
} else {
  themeBtn.classList.add('hide');
}
/*
 * END alphaTheme.js
 */