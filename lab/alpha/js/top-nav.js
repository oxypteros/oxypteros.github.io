const header = document.querySelector('.top-bar');
const cover = document.querySelector('.cover')
const height = document.documentElement.clientHeight;
const initialPos = header.offsetTop;
console.log(initialPos)
document.addEventListener('scroll', (event) =>{
  let scrollFromTop = document.documentElement.scrollTop;
  let yPos = window.scrollY;
  let currentPos = header.offsetTop
  console.log(currentPos)
  if(yPos < currentPos && yPos != 0){
    cover.classList.add('none')
  } else if( currentPos < initialPos && yPos == 0){
    cover.classList.remove('none')
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