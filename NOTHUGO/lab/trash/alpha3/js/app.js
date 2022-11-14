'use strict';
// Hamburger
const footerNavMenuBtn = document.getElementById('footer-nav-menu-btn');
const footerNavMenu = document.querySelector('.footer-nav-menu');
const menuSvgOpen = document.getElementById('menu-svg-open');
const menuSvgClose = document.getElementById('menu-svg-close');
function toggleMenu() {
  if (footerNavMenu.classList.contains('visually-hidden'))
  {
    menuSvgOpen.classList.add('hidden');
    menuSvgClose.classList.remove('hidden');
    footerNavMenu.classList.remove('visually-hidden');
  } else {
    menuSvgOpen.classList.remove('hidden');
    menuSvgClose.classList.add('hidden');
    footerNavMenu.classList.add('visually-hidden');
    
  }
}
footerNavMenuBtn.addEventListener('click', toggleMenu);

