'use strict';
// Hamburger
const footerNavMenuBtn = document.getElementById('footer-nav-menu-btn');
const footerNavMenu = document.querySelector('.footer-nav-menu');

function toggleMenu() {
  if (footerNavMenu.classList.contains('visually-hidden'))
  {
    footerNavMenu.remove('visually-hidden');
    conole.log('error1');
  } else {
  console.log('error');
    
  }
}
footerNavMenu.addEventListener('click', toggleMenu);
/*
console.log(footerNavMenu);
footerNavMenuBtn.addEventListener('click', function()
{
  console.log(footerNavMenu);
  footerNavMenu.classlist.toggle('visually-hidden');
});
/*const navToggle = document.querySelector(".nav-toggle");  
 const links = document.querySelector(".links");  
 navToggle.addEventListener("click", function () {  
  links.classList.toggle("show-links");  
 });*/
