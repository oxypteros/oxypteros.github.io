'use strict';
// Constants
const btnScheme = document.querySelector(".btnSchemeJs");

// Check for CSS support for oxy-theme
let supportCSS = CSS.supports('color', 'var(--bg)');

// DEBUG


console.log("CSS: " + supportCSS);
// If oxy-theme supported by CSS enable else hide button
if (supportCSS = true ) {
  // User prefers dark
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let oxyTheme = localStorage.getItem('oxy-theme');
  //Check local storage and browser setting
  if (oxyTheme === 'dark' || prefersDarkScheme === true) {
    document.documentElement.setAttribute('oxy-theme', 'dark')
    localStorage.setItem('oxy-theme', 'dark');
  } else {
    localStorage.setItem('oxy-theme', 'light');
  }
  // Change oxy-theme function
  function changeOxyTheme(){
    let oxyTheme = localStorage.getItem('oxy-theme');
    if (oxyTheme === 'light'){
      document.documentElement.setAttribute('oxy-theme', 'dark')
      localStorage.setItem('oxy-theme', 'dark');
      console.log(1)
    } else {
      document.documentElement.setAttribute('oxy-theme', 'light')
      localStorage.setItem('oxy-theme', 'light');
      console.log(2)
    }
  }
  // Button Event Listener
  btnScheme.addEventListener('click', changeOxyTheme);
} else {
  btnScheme.classList.add('hidden');
}


/*
if (window.CSS && CSS.supports('color', 'var(--primary)')) {
 
  if ( prefersDarkScheme = true 
  localStorage.getItem('color-mode') === 'dark' ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches &&
   !localStorage.getItem('color-mode'))
) {
  // if true, set the site to Dark Mode
  document.documentElement.setAttribute('color-mode', 'dark')
}
}else{ console.log('NOT SUPPORTED')
}*/
/* COLOR SCHEME
const btnScheme = document.querySelector(".btnSchemeJs");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentScheme = localStorage.getItem("scheme");console.log(currentScheme)
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
});*/
