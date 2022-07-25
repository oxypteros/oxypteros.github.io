const leftFrame = document.querySelector('#left-frame');
const rightFrame = document.querySelector('#right-frame');
const widthFiftyAll = document.querySelectorAll('.w50');
const leftVisuallyHiddenAll = document.querySelectorAll('.lvh', '.vh');
const leftHiddenAll = document.querySelectorAll('.lh', '.hidden');
const rightVisibleAll = document.querySelectorAll('.rv', '.vh');

const darkLogo = document.querySelector('#dark-logo');
const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.querySelector('#right-btn');
const leftPreTitle = document.querySelector('.left-pre-title');
const rightPreTitle = document.querySelector('.right-pre-title');
const leftTitle = document.querySelector('.left-title');
const rightTitle = document.querySelector('.right-title');
const leftPostTitle = document.querySelector('.left-post-title');
const rightPostTitle = document.querySelector('.right-post-title');
const randomBtn = document.querySelector('#random-btn');
const rightLinks = document.querySelector('.right-link-wrapper');
const leftFootnote = document.querySelector('.left-footnote');
const rightFootnote = document.querySelector('.right-footnote');

// Mouse on Left Frame
leftFrame.addEventListener('mousemove', () => {
  widthFiftyAll.forEach(w50 => { w50.classList.remove('w50'); });
  leftVisuallyHiddenAll.forEach(vh => { vh.classList.remove('vh'); });
  leftHiddenAll.forEach(hidden => { hidden.classList.remove('hidden'); });
  leftFrame.classList.add('w100');
  rightFrame.classList.add('w0');
});

// Left button pressed
leftBtn.addEventListener('click', () => {
  leftFrame.classList.remove('w100');
  leftFrame.classList.add('w50');
  rightFrame.classList.remove('w0');
  rightFrame.classList.add('w50');
  leftVisuallyHiddenAll.forEach(lvh => {
    lvh.classList.add('vh');
    console.log(lvh);
    });
  leftHiddenAll.forEach(lh => {
      lh.classList.add('hidden');
      });
  //leftPreTitle.classList.add('visually-hidden');
  //leftTitle.classList.remove('underline');
  //leftPostTitle.classList.add('visually-hidden');
  //randomBtn.classList.add('visually-hidden')
  //leftBtn.classList.add('hidden')
  //leftFootnote.classList.add('hidden');
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
  rightPreTitle.classList.remove('visually-hidden');
  rightPostTitle.classList.remove('visually-hidden');
  rightLinks.classList.remove('visually-hidden');
  rightFootnote.classList.remove('hidden');
});

// Right button pressed
rightBtn.addEventListener('click', () => {
  rightFrame.classList.remove('w100');
  rightFrame.classList.add('w50');
  leftFrame.classList.remove('w0');
  leftFrame.classList.add('w50');
  rightBtn.classList.add('hidden');
  darkLogo.classList.add('hidden');
  rightPreTitle.classList.add('visually-hidden');
  rightPostTitle.classList.add('visually-hidden');
  rightLinks.classList.add('visually-hidden');
  rightFootnote.classList.add('hidden');
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
