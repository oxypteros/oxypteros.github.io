'use strict';
console.log('Hello from the tail!');
/* Top Nav Active Link*/
const topNavActiveLink = document.getElementById('topNavActiveLink');
if(topNavActiveLink){
  topNavActiveLink.classList.toggle('text-gray-900');
  topNavActiveLink.classList.toggle('text-base');
}
/* TOC Nav Menu */
const toggleTocBtn = document.getElementById('toggleToc');
const leftDevSidebar = document.getElementById('leftDevSidebar');
const leftDevSidebarTop = document.getElementById('leftDevSidebarTop');
const leftDevSidebarBottom = document.getElementById('leftDevSidebarBottom');

if (toggleTocBtn) {
  const toggleTocIcon = document.getElementById('toggleTocIcon').querySelector('use');
  let isTocOpen = false;

  function toggleTocState() {
    isTocOpen = !isTocOpen;
    leftDevSidebarTop.classList.toggle('-translate-x-full');
    leftDevSidebar.classList.toggle('-translate-x-full');
    leftDevSidebarBottom.classList.toggle('-translate-x-full');

    const sidebarSecLink = document.getElementById('sidebarSecLink');
    if (sidebarSecLink) {
      sidebarSecLink.classList.toggle('border-gray-200');
      sidebarSecLink.classList.toggle('border-dev-500');
      sidebarSecLink.classList.toggle('font-normal');
    }

    // 1. Update `aria-expanded` on the toggle button
    toggleTocBtn.setAttribute('aria-expanded', isTocOpen.toString());

    // 2. Toggle the menu icon between `#close` and `#list-tree`
    if (isTocOpen) {
      toggleTocIcon.setAttribute('xlink:href', '#close');
      
      // 3. Set the article content to inert when the sidebar is open
      document.querySelector('article').setAttribute('inert', '');
    } else {
      toggleTocIcon.setAttribute('xlink:href', '#list-tree');
      
      // Remove the inert attribute when the sidebar is closed
      document.querySelector('article').removeAttribute('inert');
    }
  }

  // Toc Nav Menu Button
  toggleTocBtn.addEventListener('click', toggleTocState);

  // 4. Toc Nav Menu Esc - close the menu and return focus to the button
  document.addEventListener('keydown', (e) => {
    if (isTocOpen && e.key === 'Escape') {
      toggleTocState();
      toggleTocBtn.focus();  // Return focus to the button
    }
  });

  // 5. Optional: Trap focus within the sidebar when it is open
  document.addEventListener('keydown', (e) => {
    if (isTocOpen && e.key === 'Tab') {
      const focusableElements = leftDevSidebar.querySelectorAll('a, button');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // If Shift+Tab, focus last element (loop back)
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }

      // If Tab, focus first element (loop back)
      if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });

  // 6. Close the menu when clicking outside of the sidebar
  document.addEventListener('click', (e) => {
    if (isTocOpen && !leftDevSidebar.contains(e.target) && !toggleTocBtn.contains(e.target)) {
      toggleTocState();
    }
  });
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