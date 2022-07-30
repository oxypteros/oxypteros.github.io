const readingProgress = document.querySelector('#reading-progress-fill');
const value = document.querySelector('#file').value;
console.log(value)
document.addEventListener('scroll', function(e) {
  let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
  document.querySelector('#file').value += w;
  value.setAttribute(w);
  readingProgress.style.setProperty('width', w + '%');
});
let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
console.log(w)





/*const all =document.querySelectorAll('.test, .test1')
const btn = document.querySelector('#btn');
console.log(all);
console.log(all.length);


btn.addEventListener('click', function() {
 all.forEach(
  function(test1){
  test1.classList.add('c')
 })
});
*/
