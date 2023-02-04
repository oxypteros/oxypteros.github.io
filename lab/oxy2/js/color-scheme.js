'use strict';
// Button constant
const btnScheme = document.querySelector(".btnSchemeJs");

// Check for CSS support for oxy-theme
let supportCSS = CSS.supports('color', 'var(--bg)');

// If oxy-theme supported by CSS enable else hide button
if (supportCSS = true) {
  // Browser is set to dark true/false
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // User preference dark/light/null
  let oxyTheme = localStorage.getItem('oxy-theme');
console.log(oxyTheme)
  // Check user/browser choice and pass it to local storage
  if (oxyTheme === null && prefersDarkScheme === true ) {
    document.documentElement.setAttribute('oxy-theme', 'dark')
    localStorage.setItem('oxy-theme', 'dark');
    console.log('SET DEFAULT TO DARK')
  } else if(oxyTheme === null && prefersDarkScheme === false){
    localStorage.setItem('oxy-theme', 'light');
    console.log('SET DEFAULT TO LIGHT')
  }
  // Change oxy-theme function
  function changeOxyTheme(){
    let oxyTheme = localStorage.getItem('oxy-theme');
    if (oxyTheme === 'dark'){
      document.documentElement.setAttribute('oxy-theme', 'light')
      localStorage.setItem('oxy-theme', 'light');
      console.log('SET by BTN TO LIGHT')
    } else {
      document.documentElement.setAttribute('oxy-theme', 'dark')
      localStorage.setItem('oxy-theme', 'dark');
      console.log('SET By BTN TO dark')
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
