const cookieCnt = document.querySelector(".cookie-container");
if (cookieCnt){
const cookieClsBtn = document.querySelector('.cookieBtnClsJs');
let discStatus = localStorage.getItem('consent');
if (discStatus === null ){
  cookieCnt.classList.remove('hide')
  localStorage.setItem('consent', 0);
} else if (discStatus === '0'){
  cookieCnt.classList.remove('hide')
}
function closeDisc(){
  cookieCnt.classList.add('hide');
  localStorage.setItem('consent', 1)
}
cookieClsBtn.addEventListener('click', closeDisc)
}