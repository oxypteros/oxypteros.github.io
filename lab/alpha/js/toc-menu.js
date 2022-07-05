const toc = document.querySelector(".article-toc");
const openToc = document.querySelector(".btn-toc");
const closeToc = document.querySelector(".btc-toc-close");

function openToc() {
  if (menu.classList.contains("show-toc")) {
    toc.classList.remove("show-toc");
  } else {
    toc.classList.add("show-toc");
    console.log('open');
  }
}
function closeToc() {
  console-log("closed");
  toc.classList.remove("show-toc");
}

openToc.addEventListener("click", openToc);
closeToc.addEventListener("click", closeToc);