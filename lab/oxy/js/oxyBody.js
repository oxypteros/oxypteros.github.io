'use strict';
/*
* Oxy Theme
*/
// Button constant
const btnScheme = document.querySelector(".btnSchemeJs");
if(btnScheme){
  function changeOxyTheme(){
    let oxyTheme = localStorage.getItem('oxy-theme');
    if (oxyTheme === 'dark'){
      document.documentElement.setAttribute('oxy-theme', 'light')
      localStorage.setItem('oxy-theme', 'light');
    } else {
      document.documentElement.setAttribute('oxy-theme', 'dark')
      localStorage.setItem('oxy-theme', 'dark');
    }
  }
  // Button Event Listener
  btnScheme.addEventListener('click', changeOxyTheme);
}
/*
* END Oxy Theme
*/