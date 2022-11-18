'use strict';
// Bottom bar constants
const hamMenu = document.querySelector('.menuBarJs');
const indexMenu = document.querySelector('.indexBarJs');
// Hamburger Menu
if (hamMenu != null) {
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
if (indexMenu != null) {
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
    let targetUrl = '/lab/index.html';
    window.location.href = targetUrl;
  }
if (pi != null) {
  pi.addEventListener('click', piRedirect);
}
/*'use strict';
const index = document.querySelector('#index-page');

const progBar = document.querySelector('.prog-bar');



/* Progress Bar 
if (progBar != null) {
const endY = document.querySelector('.end').offsetTop;

window.addEventListener('scroll', function() {
  const scrollPositionY = window.pageYOffset;
  
  if (endY > scrollPositionY) {

    let percentY = scrollPositionY * 100 / endY;
    document.querySelector('#read').setAttribute('value', percentY);
  };
});

/* Async Version
const start = document.querySelector('.start');
const end = document.querySelector('.end');
let value = document.querySelector('#file').value;
console.log('Start Value = ' + value);
const startPointY = start.offsetTop;
const endPointY = end.offsetTop;
const finalHeight = endPointY - startPointY;

window.addEventListener('scroll', async function() {
  const scrollPositionY = window.pageYOffset;
await new Promise(res => { setTimeout(res, 1000); });
  if (endPointY > scrollPositionY && startPointY < scrollPositionY ) {

    let percentY = Math.round(scrollPositionY * 100 / finalHeight);
    console.log('Percent = ' + percentY)

  document.querySelector('#file').setAttribute('value', percentY);
  };
});





};

/* Index Page Splitter 
if (index != null){
const leftFrame = document.querySelector('#left-frame');
const rightFrame = document.querySelector('#right-frame');
const widthFiftyAll = document.querySelectorAll('.w50');
const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.querySelector('#right-btn');
const leftHiddenAll = document.querySelectorAll('.lvh, .lh');
const rightHiddenAll = document.querySelectorAll('.rvh, .rh')

/* Mouse on Left Frame, change the width left/right, and remove visually hidden and hidden classes 
leftFrame.addEventListener('mousemove', () => {
  widthFiftyAll.forEach(w50 => { 
    w50.classList.remove('w50'); 
  });

  leftFrame.classList.add('w100');
  rightFrame.classList.add('w0');

  leftHiddenAll.forEach(lvh => { 
    console.log(lvh)
    lvh.classList.remove('vh', 'hid'); 
  });
});

/* Left button pressed, reset the width left/right and add visually hidden and hidden classes 
leftBtn.addEventListener('click', () => {
  leftFrame.classList.remove('w100');
  leftFrame.classList.add('w50');
  rightFrame.classList.remove('w0');
  rightFrame.classList.add('w50');
  leftHiddenAll.forEach(lvh => {
    lvh.classList.add('vh'); 
  });
});

/* Mouse on Right Frame, change the width left/right, and remove visually hidden and hidden classes 
rightFrame.addEventListener('mousemove', () => {
  widthFiftyAll.forEach(w50 => { 
    w50.classList.remove('w50');
  });
  rightFrame.classList.add('w100');
  leftFrame.classList.add('w0');
  rightHiddenAll.forEach(rvh => { 
    rvh.classList.remove('vh');
    rvh.classList.remove('hid');
  });

});

/* Right button pressed, reset the width left/right and add visually hidden and hidden classes 
rightBtn.addEventListener('click', () => {
  rightFrame.classList.remove('w100');
  rightFrame.classList.add('w50');
  leftFrame.classList.remove('w0');
  leftFrame.classList.add('w50');
  rightHiddenAll.forEach(rvh => { 
    rvh.classList.add('vh');
  });
});

};
*/
