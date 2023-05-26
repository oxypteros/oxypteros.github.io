const pageTitle = document.querySelector('.pageTitle');
const topBarTitle = document.querySelector('.topBarTitle');
const topBar = document.querySelector('.topBar');
const height = document.documentElement.clientHeight;
if(topBarTitle) {
  document.addEventListener("scroll", (event) => {
    let yPos = window.scrollY;
    if(yPos >= height){
      topBarTitle.classList.add('o-1')
      topBarTitle.textContent = pageTitle.textContent;
      topBar.classList.add('bb-o');
    }else{
      topBarTitle.textContent = null;
      topBar.classList.remove('bb-o');
      topBarTitle.classList.remove('o-1')
    }
  })
}