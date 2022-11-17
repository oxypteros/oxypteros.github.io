'use strict';
// Bottom bar constants
const hamMenu = document.querySelector('.menuBarJs');
const indexMenu = document.querySelector('.indexBarJs');
// Hamburger Menu
if (hamMenu) {
  const hamBtn = document.querySelector('.hamBtnJs');
  const hamBtnClose = document.querySelector('.hamBtnCloseJs');
  const menuBar = document.querySelector('.menuBarJs');
  const navBar = document.querySelector('.navBarJs');
  const droid = document.querySelector('.droidJs');
  
  // Open Hamburger Menu function
  function openHamMenu() {
    if(navBar.classList.contains('hiddenJs')) {
      menuBar.classList.add('hiddenJs');
      droid.classList.add('slideIn');
      navBar.classList.add('slideIn');
      navBar.classList.remove('hiddenJs');
      setTimeout(function() { 
      droid.classList.remove('slideIn');
      navBar.classList.remove('slideIn'); 
      }, 1000);
    }
  };
  // Close Hamburger Menu function
  function closeHamMenu() {
    if(menuBar.classList.contains('hiddenJs')) {
      navBar.classList.add('hiddenJs');
      menuBar.classList.remove('hiddenJs');
    }
  };
  // Open/Close Hamburger Menu event listeners
  hamBtn.addEventListener('click', openHamMenu);
  hamBtnClose.addEventListener('click', closeHamMenu);
  
  const menuLinks = document.querySelectorAll('.menuLinkJs');
  menuLinks.forEach (
      function(closeHam) {
        closeHam.addEventListener('click', closeHamMenu);
      }
    )
}

// Index Menu
if (indexMenu) {
  const indexBtn = document.querySelector('.indexBtnJs');
  const indexBtnClose = document.querySelector('.indexBtnCloseJs');
  const indexBar = document.querySelector('.indexBarJs');
  const index = document.querySelector('.indexJs');
  const indexLinks = document.querySelectorAll("#TableOfContents a");
  
  // Open Index Menu function
  function openIndexMenu() {
    if(index.classList.contains('hiddenJs')) {
      indexBar.classList.add('hiddenJs');
      index.classList.add('slideIn');
      index.classList.remove('hiddenJs');
    }
  };
  // Close Index Menu function
  function closeIndexMenu() {
    if(indexBar.classList.contains('hiddenJs')) {
      index.classList.add('hiddenJs');
      indexBar.classList.remove('hiddenJs');
    }
  };
  // Open/Close Index Menu event listeners
  indexBtn.addEventListener('click', openIndexMenu);
  indexBtnClose.addEventListener('click', closeIndexMenu);
  indexLinks.forEach (
    function(closeIndex) {
      closeIndex.addEventListener('click', closeIndexMenu);
    }
  )
};
 
// pi backdoor
const pi = document.querySelector('.piJs');
  function piRedirect() {
    let targetUrl = '/lab/projects/index.html';
    window.location.href = targetUrl;
  }
if (pi) {
  pi.addEventListener('click', piRedirect);
  
}
