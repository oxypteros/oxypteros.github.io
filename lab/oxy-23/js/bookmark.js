"use strict";
const bookmarkBtn = document.querySelector(".bookmarkBtnJs");
const storyUrl = window.location.href;
const bookmarkSvg = document.querySelector(".svg-bookmark-icon");
if (localStorage.getItem(storyUrl) != null) {
  let y = localStorage.getItem(storyUrl);
  if (y) {
    window.scrollTo(0, y);
    bookmarkSvg.classList.add("bookmarked");
  }
}
function addBookmark() {
  let position = window.pageYOffset;
  localStorage.setItem(storyUrl, position);
  bookmarkSvg.classList.add("bookmarked");
}
bookmarkBtn.addEventListener("click", addBookmark);