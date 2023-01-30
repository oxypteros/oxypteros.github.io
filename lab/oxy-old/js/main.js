// COLOR SCHEME
const btnScheme = document.querySelector(".btnSchemeJs");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentScheme = localStorage.getItem("scheme");
if (currentScheme == "dark") {
  document.body.classList.toggle("dark-scheme");
} else if (currentScheme == "light") {
  document.body.classList.toggle("light-scheme");
}

btnScheme.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-scheme");
    var scheme = document.body.classList.contains("light-scheme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-scheme");
    var scheme = document.body.classList.contains("dark-scheme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("scheme", scheme);
});