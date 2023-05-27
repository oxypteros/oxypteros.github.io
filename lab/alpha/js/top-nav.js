const topBar = document.querySelector('.topBar');
const cover = document.querySelector('.cover')
const coverTitle = document.querySelector('.coverTitle')
const height = document.documentElement.clientHeight;
const initialPos = topBar.offsetTop;

document.addEventListener('scroll', (event) =>{
  let scrollFromTop = document.documentElement.scrollTop;
  let yPos = window.scrollY;
  let currentPos = topBar.offsetTop;
  if(yPos < currentPos && yPos != 0){
    coverTitle.classList.add('vis-hidden')
    cover.classList.add('h0px');
    setTimeout(() => {
      topBar.classList.add('bgSur', 'bbOutSec');
    }, 600);

  } else if( currentPos < initialPos && yPos == 0){
    cover.classList.remove('h0px');
    topBar.classList.remove('bgSur');
    setTimeout(() => {
      coverTitle.classList.remove('vis-hidden');
      topBar.classList.remove('bbOutSec');
    }, 1100);
    
  }
})

/*const pageTitle = document.querySelector('.pageTitle');
const topBarTitle = document.querySelector('.topBarTitle');
const topBar = document.querySelector('.topBar');
const height = document.documentElement.clientHeight;
const element = document.getElementById("test")
const element1 = document.getElementById("start")
console.log( height/2)
if(topBarTitle) {
  
  document.addEventListener("scroll", (event) => {
    let scrollFromTop = document.documentElement.scrollTop;
    let yPos = window.scrollY;
    if(scrollFromTop < height/2 && scrollFromTop != 0 ){
      element.scrollIntoView();
      topBarTitle.classList.add('o-1')
      topBarTitle.textContent = pageTitle.textContent;
      topBar.classList.add('bb-o');
      console.log('1st:' + yPos);
    } else if(scrollFromTop < height && scrollFromTop > 0) {
      window.scrollTo(0, 0);
     //element1.scrollIntoView({ block: "start", behavior: "smooth"});
      topBarTitle.textContent = null;
      topBar.classList.remove('bb-o');
      topBarTitle.classList.remove('o-1');
      console.log('2nd: ' + yPos);
    }
    /*
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
}*/