const all =document.querySelectorAll('.test, .test1')
const btn = document.querySelector('#btn');
console.log(all);
console.log(all.length);


btn.addEventListener('click', function() {
 all.forEach(
  function(test1){
  test1.classList.add('c')
 })
});