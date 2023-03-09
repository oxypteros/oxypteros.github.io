const currUrl = window.location.href;
const actLink = document.querySelectorAll(".nav-menu-link");
actLink.forEach(currLink);
function currLink(link){
  if (link.getAttribute("href") === currUrl){
  link.classList.toggle("current-link");
  }
}