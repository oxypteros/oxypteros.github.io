const currUrl = window.location.href;
const actLink = document.querySelectorAll(".nav-menu-link");
const header = document.querySelector(".alpha-header");
const navBar = document.querySelector(".nav-bar");
const page = document.querySelector(".page");
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
if (page) {
  document.addEventListener("scroll", (event) => {
    let yPos = window.scrollY;
    if(yPos >= 270){
      document.body.classList.add("bgcSJs");
    } else if (yPos < 270){
      document.body.classList.remove("bgcSJs");
    }

})
}