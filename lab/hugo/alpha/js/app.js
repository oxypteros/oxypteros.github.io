const currUrl = window.location.href;
const actLink = document.querySelectorAll(".nav-menu-link");
const header = document.querySelector(".alpha-header");
const navBar = document.querySelector(".nav-bar");
actLink.forEach(currLink);
function currLink(link){
  if (link.getAttribute("href") === currUrl){
  link.classList.toggle("current-link");
  }
}
if (header) {
  document.addEventListener("scroll", (event) => {
    let yPos = window.scrollY;
    let checkBBJs = header.classList.contains('bbJs');
    if(yPos > 60){
  header.classList.add("bbJs")
    }else if(checkBBJs){
      header.classList.remove("bbJs")
    }
})
}
/*
if (navBar) {
  document.addEventListener("scroll", (event) => {
    let yPos = window.scrollY;
    console.log(yPos)
    if(yPos >= 330 && yPos <= 340) {
      navBar.classList.remove('o9Js')
      navBar.classList.add('o8Js')
    } else if (yPos >= 341 && yPos <= 350){
      navBar.classList.remove('o8Js')
      navBar.classList.add('o9Js')
    } else {
      navBar.classList.remove('o9Js')
      navBar.classList.remove('o8Js')
    }
   
  })
}*/