/* Progress Bar */
const start = document.querySelector('.start');
const end = document.querySelector('.end');
let value = document.querySelector('#file').value;
const totalY = document.body.scrollHeight;

console.log('Start Value = ' + totalY);
const startPointY = start.offsetTop;
const endPointY = end.offsetTop;
const finalHeight = endPointY - startPointY;
const y = totalY - endPointY - startPointY;
console.log(y)
console.log(endPointY)
window.addEventListener('scroll', function() {
  const scrollPositionY = window.pageYOffset;
  
  if (endPointY > scrollPositionY && startPointY < scrollPositionY ) {

    let percentY = (scrollPositionY + y) * 100 / finalHeight;
    console.log('Percent = ' + percentY)

  document.querySelector('#file').setAttribute('value', percentY);
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

