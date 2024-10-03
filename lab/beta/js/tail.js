'use strict';
console.log('Hello from the tail!');
// TOC Nav Menu
const toggleToc = document.getElementById('toggleToc');
const leftDevSidebar = document.getElementById('leftDevSidebar');
const leftDevSidebarTop = document.getElementById('leftDevSidebarTop');
const leftDevSidebarBottom = document.getElementById('leftDevSidebarBottom');

if (toggleToc) {
  const toggleTocIcon = document.getElementById('toggleTocIcon').querySelector('use');
  let isTocOpen = false;
  function toggleTocState(){
    isTocOpen = !isTocOpen;
    leftDevSidebarTop.classList.toggle('-translate-x-full');
    leftDevSidebar.classList.toggle('-translate-x-full');
  }
  toggleToc.addEventListener('click', toggleTocState);

}
/*
const menuToggle = document.getElementById('menuToggle');
const sidebarToc = document.getElementById('sidebarToc');

const menuIcon = document.getElementById('menuIcon').querySelector('use');
if (menuToggle){
let isMenuOpen = false;
const sidebarLinks = sidebarToc.querySelectorAll('a');
function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  sidebarToc.classList.toggle('-translate-x-full');
  sidebarToc.classList.toggle('translate-x-0');
  sidebarToc.setAttribute('aria-hidden', !isMenuOpen);
  menuToggle.setAttribute('aria-expanded', isMenuOpen);

  // Change the icon dynamically
  if (isMenuOpen) {
    menuIcon.setAttribute('xlink:href', '#close'); // Change to close icon
    sidebarToc.querySelector('a').focus(); // Focus on first menu link
    sidebarLinks.forEach(link => link.removeAttribute('tabindex'));
  } else {
    menuIcon.setAttribute('xlink:href', '#list-tree'); // Change back to menu icon
    menuToggle.focus(); // Return focus to the button when menu is closed
    sidebarLinks.forEach(link => link.setAttribute('tabindex', '-1'));
  }
}

// Toggle the menu on button click
menuToggle.addEventListener('click', toggleMenu);

// Close the menu on 'Esc' key press
document.addEventListener('keydown', (e) => {
  if (isMenuOpen && e.key === 'Escape') {
    toggleMenu();
  }
});
// Close the menu when a link is clicked and scroll to the target
sidebarLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    if (isMenuOpen) {
      toggleMenu(); // Close the menu
    }

    // Prevent default action for smooth scrolling
    e.preventDefault();
    
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 70; // Adjust for header
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // Smooth scroll
      });
    }
  });
});
document.addEventListener('click', (e) => {
  const isClickInside = sidebarToc.contains(e.target) || menuToggle.contains(e.target);
  if (isMenuOpen && !isClickInside) {
    toggleMenu(); // Close the menu
  }
});
}
*/