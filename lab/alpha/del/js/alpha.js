const stHead = document.querySelector('.sticky-header');
window.onscroll = function (e){
  let scrolled = window.scrollY;
  if (scrolled >= 50){
    stHead.classList.add('bbsh')
  } else if (scrolled <= 50){
    stHead.classList.remove('bbsh')
  }
}