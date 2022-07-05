(async () => {
  const toc = document.querySelector('#toc-menu');
  await customElements.whenDefined('bento-sidebar');
  const tocLinks = document.querySelectorAll('.toc-link-close');

  const api = await toc.getApi();
  // set up button actions
  document.querySelector('#btn-toc-open').onclick = () => api.open();
  document.querySelector('#btn-toc-close').onclick = () => api.close();
 /* tocLinks.forEach(function(tocLink) {
    tocLink.onclick = () => api.close();
    })*/

})();

/*
.forEach(function(e) {
    e.onclick = function(evt) {
      console.log('clicked', evt.target.innerHTML);
      document.getElementById("e38value").classList.toggle("e38hidden");
    }
const toc = document.querySelector(".article-toc");
const btnOpenToc = document.querySelector(".btn-toc");
const btnCloseToc = document.querySelector(".btn-toc-close");

function openToc() {
  if (toc.classList.contains("show-toc")) {
    toc.classList.remove("show-toc");
  } else {
    toc.classList.add("show-toc");
    console.log('open');
  }
}
function closeToc() {
  console.log("closed");
  toc.classList.remove("show-toc");
}

btnOpenToc.addEventListener("click", openToc);
btnCloseToc.addEventListener("click", closeToc);*/