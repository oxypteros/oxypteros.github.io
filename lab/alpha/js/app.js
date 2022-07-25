const leftFrame = document.querySelector('#left-frame');
const rightFrame = document.querySelector('#right-frame');
const widthFiftyAll = document.querySelectorAll('.w50');
const darkLogo = document.querySelector('#dark-logo')
const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.querySelector('#right-btn');
const leftPreTitle = document.querySelector('.left-pre-title');
const leftTitle = document.querySelector('.left-title');
const leftPostTitle = document.querySelector('.left-post-title');
const randomBtn = document.querySelector('#random-btn');
const footnote = document.querySelector('.footnote');

// Mouse on Left Frame
leftFrame.addEventListener('mousemove', () => {
  widthFiftyAll.forEach(w50 => {
  w50.classList.remove('w50');
  });
  leftFrame.classList.add('w100');
  rightFrame.classList.add('w0');
  leftPreTitle.classList.remove('visually-hidden');
  leftTitle.classList.add('underline');
  leftPostTitle.classList.remove('visually-hidden');
  randomBtn.classList.remove('visually-hidden')
  leftBtn.classList.remove('hidden');
  footnote.classList.remove('hidden');
});

// Left button pressed
leftBtn.addEventListener('click', () => {
  leftFrame.classList.remove('w100');
  leftFrame.classList.add('w50');
  rightFrame.classList.remove('w0');
  rightFrame.classList.add('w50');
  leftPreTitle.classList.add('visually-hidden');
  leftTitle.classList.remove('underline');
  leftPostTitle.classList.add('visually-hidden');
  randomBtn.classList.add('visually-hidden')
  leftBtn.classList.add('hidden')
  footnote.classList.add('hidden');
});

// Mouse on Right Frame
rightFrame.addEventListener('mousemove', () => {
  widthFiftyAll.forEach(w50 => {
    w50.classList.remove('w50');
  });
  rightFrame.classList.add('w100');
  leftFrame.classList.add('w0');
  rightBtn.classList.remove('hidden');
  darkLogo.classList.remove('hidden');
});

// Right button pressed
rightBtn.addEventListener('click', () => {
  rightFrame.classList.remove('w100');
  rightFrame.classList.add('w50');
  leftFrame.classList.remove('w0');
  leftFrame.classList.add('w50');
  rightBtn.classList.add('hidden');
  darkLogo.classList.add('hidden');
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
