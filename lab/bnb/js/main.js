'use strict';
// Bottom bar constants
const hamMenuSmall = document.getElementById('hamMenuSmallJs');

// Hamburger Menu
if (hamMenuSmall) {
  const hamBtnSmall = document.getElementById('hamBtnSmallJs');

 
  //const hamBtnClose = document.querySelector('.hamBtnCloseJs');
  //const menuBar = document.querySelector('.menuBarJs');
  //const navBar = document.querySelector('.navBarJs');
  //const droid = document.querySelector('.droidJs');
  
  // Open Hamburger Menu function
  function openHamMenu() {
    if(navBar.classList.contains('hiddenJs')) {
      menuBar.classList.add('hiddenJs');
      //droid.classList.add('slideIn');
      navBar.classList.add('slideIn');
      navBar.classList.remove('hiddenJs');
      setTimeout(function() { 
      //droid.classList.remove('slideIn');
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
  function closeOutside() {
    if(index == null){
      navBar.classList.add('hiddenJs');
      menuBar.classList.remove('hiddenJs');
    }else{
          if(menuBar.classList.contains('hiddenJs') && index.classList.contains('hiddenJs')) {
            navBar.classList.add('hiddenJs');
            menuBar.classList.remove('hiddenJs');
    } 
  }
  };}