'use strict';
/*
Oxy Theme
*/

// Check for CSS support for oxy-theme
let supportCSS = CSS.supports("color", "var(--bgc)");
// If oxy-theme supported by CSS enable else hide button
if ((supportCSS = true)) {
  // Browser is set to dark true/false
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  // User preference dark/light/null
  let oxyTheme = localStorage.getItem("oxy-theme");

  // If visitor had already selected dark set preference to dark change oxy-theme to dark
  if (oxyTheme === "dark") {
    document.body.classList.toggle("oxy-dark");
  }
  // If first time visitor check browser for color theme and pass it to storage
  if (oxyTheme === null && prefersDarkScheme === true) {
    document.body.classList.toggle("oxy-dark");
    localStorage.setItem("oxy-theme", "dark");
  }

  // Button constant
  const btnTheme = document.querySelector(".btnThemeJs");
  if (btnTheme) {
    function changeOxyTheme() {
      let oxyTheme = localStorage.getItem("oxy-theme");
      if (oxyTheme === "dark") {
        document.body.classList.toggle("oxy-dark");
        localStorage.setItem("oxy-theme", "light");
      } else {
        document.body.classList.toggle("oxy-dark");
        localStorage.setItem("oxy-theme", "dark");
      }
    }
    // Button Event Listener
    btnTheme.addEventListener("click", changeOxyTheme);
  }
} else {
  btnTheme.classList.add("hidden"); // If browser don't support Oxy Theme hide the change theme button.
}
/*
 * END Oxy Theme
 */
