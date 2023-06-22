// Nav. Bar decorator js
const actLink = document.querySelectorAll(".menu-link");
actLink.forEach(currLink);
function currLink(link) {
  if (link.getAttribute("href") == window.location.href) {
    link.classList.toggle("active");
  }
}