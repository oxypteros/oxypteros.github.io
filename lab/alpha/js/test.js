'use strict';

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


/*
rightFrame.addEventListener('mouseleave', () => {
  rightFrame.classList.remove('w100');
  leftFrame.classList.remove('w0');
  rightFrame.classList.add('w50');
  leftFrame.classList.add('w50')
});
*/
/*
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







document.addEventListener('DOMContentLoaded', function(){
  let wrapper = document.getElementById('wrapper');
  let topLayer = wrapper.querySelector('.top');
  let handle = wrapper.querySelector('.handle');
  let skew = 0;
  let delta = 0;

  if(wrapper.className.indexOf('skewed') != -1){
    skew = 1000;
  }
  
  wrapper.addEventListener('mousemove', function(e){
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
  
    handle.style.left = e.clientX + delta + 'px';

    topLayer.style.width= e.clientX + skew + delta + 'px';
  });
});
*/
