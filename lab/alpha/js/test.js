'use strict';
const index = document.querySelector('#index-page');
const hamMenu = document.querySelector('#ham-menu');
const progBar = document.querySelector('.prog-bar');

/* Hamburger Menu */
if (hamMenu != null) {
  const hamBtn = document.querySelector('#ham-btn');
  const hamBtnClose = document.querySelector('#ham-btn-close');
  const footerHamMenu = document.querySelector('.footer-menu');
  
  
  function  openHamMenu() {
    if (footerHamMenu.classList.contains('vhHamJs')) {
      hamBtn.classList.add('hidHamJs');
      footerHamMenu.classList.remove('vhHamJs');
    };
  };
  function closeHamMenu() {
    if (!footerHamMenu.classList.contains('vhHamJs')) {
      hamBtn.classList.remove('hidHamJs');
      footerHamMenu.classList.add('vhHamJs');
    };
  };

  hamBtn.addEventListener('click', openHamMenu);
  hamBtnClose.addEventListener('click', closeHamMenu);

} else {
  console.log('Non existing: hamMenu = ' + hamMenu);
};
/* END Ham Menu */

/* Progress Bar */
if (progBar != null) {
const start = document.querySelector('.start');
const end = document.querySelector('.end');
const startPointY = start.offsetTop;
const endPointY = end.offsetTop;
const finalHeight = endPointY - startPointY;
const totalHeight = document.body.scrollHeight;
const differenceY = totalHeight - finalHeight;
//console.log('Total Height: ' + totalHeight)
//console.log('Final Height: ' + finalHeight)
//console.log('Difference Height: ' + differenceY)

window.addEventListener('scroll', function() {
  const scrollPositionY = window.pageYOffset;
  
  if (endPointY > scrollPositionY && startPointY < scrollPositionY ) {

    let percentY = scrollPositionY * 100 / finalHeight;
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


*/


};

/* Index Page Splitter */
if (index != null){
const leftFrame = document.querySelector('#left-frame');
const rightFrame = document.querySelector('#right-frame');
const widthFiftyAll = document.querySelectorAll('.w50');
const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.querySelector('#right-btn');
const leftHiddenAll = document.querySelectorAll('.lvh, .lh');
const rightHiddenAll = document.querySelectorAll('.rvh, .rh')

/* Mouse on Left Frame, change the width left/right, and remove visually hidden and hidden classes */
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

/* Left button pressed, reset the width left/right and add visually hidden and hidden classes */
leftBtn.addEventListener('click', () => {
  leftFrame.classList.remove('w100');
  leftFrame.classList.add('w50');
  rightFrame.classList.remove('w0');
  rightFrame.classList.add('w50');
  leftHiddenAll.forEach(lvh => {
    lvh.classList.add('vh'); 
  });
});

/* Mouse on Right Frame, change the width left/right, and remove visually hidden and hidden classes */
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

/* Right button pressed, reset the width left/right and add visually hidden and hidden classes */
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

