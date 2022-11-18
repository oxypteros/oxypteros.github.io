'use strict';
const hamMenu = document.querySelector('.menuBarJs');
const indexMenu = document.querySelector('.indexBarJs')

// Hambuger Menu
if (hamMenu != null) {
  const hamBtn = document.querySelector('.hamBtnJs');
  const hamBtnClose = document.querySelector('.hamBtnCloseJs');
  const menuBar = document.querySelector('.menuBarJs');
  const navBar = document.querySelector('.navBarJs');
  
  // Open Hamburger Menu function
  function openHamMenu() {
    if(navBar.classList.contains('hiddenJs')) {
      menuBar.classList.add('hiddenJs');
      navBar.classList.add('slideIn');
      navBar.classList.remove('hiddenJs');
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
} else {
  console.log('error');
}

// Index Menu
if (indexMenu != null) {
  const indexBtn = document.querySelector('.indexBtnJs');
  const indexBtnClose = document.querySelector('.indexBtnCloseJs');
  const indexBar = document.querySelector('.indexBarJs');
  const index = document.querySelector('.indexJs');
  
  // Open Hamburger Menu function
  function openHamMenu() {
    if(index.classList.contains('hiddenJs')) {
      indexBar.classList.add('hiddenJs');
      index.classList.add('slideIn');
      index.classList.remove('hiddenJs');
    }
  };
  // Close Hamburger Menu function
  function closeHamMenu() {
    if(indexBar.classList.contains('hiddenJs')) {
      index.classList.add('hiddenJs');
      indexBar.classList.remove('hiddenJs');
    }
  };
  // Open/Close Hamburger Menu event listeners
  indexBtn.addEventListener('click', openHamMenu);
  indexBtnClose.addEventListener('click', closeHamMenu);
} else {
  console.log('error');
}
/*'use strict';
const index = document.querySelector('#index-page');
const hamMenu = document.querySelector('.ham-menu');
const progBar = document.querySelector('.prog-bar');
const tocNav = document.querySelector('.toc-nav');

/* Hamburger Menu 
if (hamMenu != null) {
  const hamBtn = document.querySelector('#ham-btn');
  const hamBtnClose = document.querySelector('#ham-btn-close');
  const footerHamMenu = document.querySelector('.footer-menu');
  const footerStoryNav = document.querySelector('#footer-story-nav')
  
  
  function  openHamMenu() {
    if (footerHamMenu.classList.contains('vhHamJs')) {
      hamBtn.classList.add('hidHamJs');
      footerStoryNav.classList.add('hidHamJs')
      footerHamMenu.classList.remove('vhHamJs');
    };
  };
  function closeHamMenu() {
    if (!footerHamMenu.classList.contains('vhHamJs')) {
      hamBtn.classList.remove('hidHamJs');
      footerStoryNav.classList.remove('hidHamJs');
      footerHamMenu.classList.add('vhHamJs');
    };
  };

  hamBtn.addEventListener('click', openHamMenu);
  hamBtnClose.addEventListener('click', closeHamMenu);

} else {
  console.log('Non existing: hamMenu = ' + hamMenu);
};
/* END Ham Menu 

/* Index Nav Menu 
if (tocNav != null) {
  const tocBtn = document.querySelector('#toc-btn');
  const storyIcons = document.querySelector('.story-icons')
  const footerTocMenu = document.querySelector('#footerTocMenu');
  const hamBtn = document.querySelector('#ham-btn');
  const tocBtnClose = document.querySelector('#toc-btn-close');
  const tocItem = document.querySelector('.toc-item')
  
  function openToc() {
    if (footerTocMenu.classList.contains('vhHamJs')) {
      
      footerTocMenu.classList.remove('vhHamJs');
      storyIcons.classList.add('hidHamJs');
      hamBtn.classList.add('hidHamJs');
    };
  };
  function closeToc() {
    if (!footerTocMenu.classList.contains('vhHamJs')) {
      hamBtn.classList.remove('hidHamJs');
      storyIcons.classList.remove('hidHamJs');
      footerTocMenu.classList.add('vhHamJs');
    };
  };
  tocBtn.addEventListener('click', openToc);
  tocBtnClose.addEventListener('click', closeToc);
 // tocItem.addEventListener('click', closeToc);
};
/* END Index Nav Menu 

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
