const stHead = document.querySelector('.sticky-header');
let scrolled = window.scrollY;
console.log('Scrolled: ' + scrolled)
if (window.scrollY != 0){
 stHead.classList.toggle('bbsh')
}