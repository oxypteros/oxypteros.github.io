const stHead = document.querySelector('.single-nav-wrap');
const titleH1 = document.querySelector('.single-h1');
const insH1 = document.querySelector('.ins-title')
let title = titleH1.innerText;
window.onscroll = function (e){
  let scrolled = window.scrollY;
  if (scrolled >= 250){
    stHead.classList.add('fade-in')
    insH1.innerHTML = title;
  } else if (scrolled <= 249){
    stHead.classList.remove('fade-in')
    stHead.classList.add('fade-out')
  }
}
// Reading aids
const tools = document.querySelector('.single-tools');
const openToolsBtn = document.querySelector('.openToolsBntJs')
const clsToolsBtn = document.querySelector('.toolsBtnClsJs')

const header = document.querySelector('.single-header');
const footer = document.querySelector('.footerHookJs');
function openTools(){
  tools.classList.toggle('hide');
}

openToolsBtn.addEventListener('click', openTools);
clsToolsBtn.addEventListener('click', openTools);

  //Bookmark
  const bookmarkBtn = document.querySelector(".bookmarkBtnJs");
  const storyUrl = window.location.href;
  const bookmarkSvg = document.querySelector(".svg-bookmark");
  const bookmarkHref = document.querySelector('.svg-bookmark-href');
  const storageList = Object.keys(localStorage);

  storageList.forEach(function (key) {
    
    if (key == storyUrl) {
      let y = localStorage.getItem(storyUrl);
      window.scrollTo(0, y);
      bookmarkHref.setAttribute('href', '#bookmarked-icn');
      bookmarkSvg.classList.toggle('svg-s-onsur');
      bookmarkSvg.classList.toggle('svg-s-pri');
    }
});
/*
  if (localStorage.getItem(storyUrl) == storyUrl) {
    let y = localStorage.getItem(storyUrl);
    if (y) {
      window.scrollTo(0, y);
      bookmarkHref.setAttribute('href', '#bookmarked-icn');
    }
  }
  */
  function addBookmark() {
    let position = window.pageYOffset;
    localStorage.setItem(storyUrl, position);
    bookmarkSvg.classList.toggle('svg-s-onsur');
    bookmarkSvg.classList.toggle('svg-s-pri');
  }
  bookmarkBtn.addEventListener("click", addBookmark);

  // Immersive mode 
  const immBtn = document.querySelector('.immBtnJs');
  const fullscreenSvg = document.querySelector('.svg-fullscreen')
  const fullscreenSvgHref = document.querySelector('.svg-fullscreen-href')
  function immersive(){
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      header.classList.toggle('hide')
      footer.classList.toggle('hide')
      fullscreenSvgHref.setAttribute('href', '#minimize-icn');
      fullscreenSvg.classList.toggle('svg-s-onsur');
      fullscreenSvg.classList.toggle('svg-s-pri');
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      header.classList.toggle('hide')
      footer.classList.toggle('hide')
      fullscreenSvgHref.setAttribute('href', '#fullscreen-icn');
      fullscreenSvg.classList.toggle('svg-s-onsur');
      fullscreenSvg.classList.toggle('svg-s-pri');
    }
  }
  immBtn.addEventListener("click", immersive);