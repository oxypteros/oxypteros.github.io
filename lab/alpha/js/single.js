const stHead = document.querySelector('.single-nav-wrap');
const titleH1 = document.querySelector('.single-h1');
const insH1 = document.querySelector('.ins-title')
let title = titleH1.innerText;
window.onscroll = function (e){
  let scrolled = window.scrollY;
  if (scrolled >= 200){
    stHead.classList.add('fade-in')
    insH1.innerHTML = title;
  } else if (scrolled <= 199){
    stHead.classList.remove('fade-in')
    stHead.classList.add('fade-out')
  }
}