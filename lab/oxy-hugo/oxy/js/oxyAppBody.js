'use strict';
/*
Oxy Theme
*/

// Check for CSS support for oxy-theme
let supportCSS = CSS.supports("color", "var(--bgc)");
// If oxy-theme supported by CSS enable else hide button
if (supportCSS = true) {
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
;

const bookmarkBtn = document.querySelector(".bookmarkBtnJs");
const storyUrl = window.location.href;
const bookmarkSvg = document.querySelector(".svg-bookmark-icon");
if (localStorage.getItem(storyUrl) != null) {
  let y = localStorage.getItem(storyUrl);
  if (y) {
    window.scrollTo(0, y);
    bookmarkSvg.classList.add("fgr");
  }
}
function addBookmark() {
  let position = window.pageYOffset;
  localStorage.setItem(storyUrl, position);
  bookmarkSvg.classList.add("fgr");
}
bookmarkBtn.addEventListener("click", addBookmark);
;
// Open close dot menu
const dotMenuBtn = document.querySelector('.dotMenuBtnJs')

if(dotMenuBtn){
  const showDotMenu = document.querySelector('.stories-menu');
  const closeDotMenu = document.querySelector('.closeDotMenuJs');
  // Open/close dot menu with dot icon
  dotMenuBtn.addEventListener("click",()=>{
    showDotMenu.classList.toggle('hidden');
  })
  // Close dot menu with close icon
  closeDotMenu.addEventListener("click", ()=>{
    showDotMenu.classList.toggle('hidden');
  })  
}

// Marker on/off
const markerBtn = document.querySelector('.markerBtnJs');
if(markerBtn) {
  let marker = '<div class="marker flex center markerJs"><div class="circle"></div><div class="line"></div><div class="circle"></div></div>';
  let insMarker = document.querySelector('.ins-marker');

  function toggleMarker(){
    let checkMarker = document.querySelector('.marker')
  
    if (!checkMarker){
      insMarker.insertAdjacentHTML('beforeend', marker)
      document.querySelector(".toggle-iconM").setAttribute('href', '#icon-switch-on')
      
    } else if (checkMarker) {
      let markerJs = document.querySelector('.markerJs')
      insMarker.removeChild(markerJs)
      document.querySelector(".toggle-iconM").setAttribute('href', '#icon-switch-off')
    }  
  }
  markerBtn.addEventListener('click', toggleMarker);
}

// Reader Mode on/off
const readerModeBtn = document.querySelector('.readerModeBtnJs');
  if (readerModeBtn) {
    function readerMode() {
      const toggleStatus = document.querySelector(".toggle-iconR").getAttribute('href');
      let offStatus = '#icon-switch-off';
      let onStatus = '#icon-switch-on';
      let selectAll = document.documentElement;  
      let header = document.querySelector('.story-header');    
      let goBackLink = document.querySelector('.goBackJs');    
      let utilities = document.querySelector('.utilities-btns');    
      let footer = document.querySelector('.story-footer');
        if (toggleStatus === offStatus){
        // Go fullscreen
          if (selectAll.requestFullscreen) {
            selectAll.requestFullscreen();
          } else if (selectAll.webkitRequestFullscreen) {
            selectAll.webkitRequestFullscreen();
          }
        // Clean document
          header.classList.add('readerHeaderJs');
          goBackLink.classList.toggle('hidden');
          utilities.classList.toggle('hidden');
          footer.classList.toggle('hidden');
          document.querySelector(".toggle-iconR").setAttribute('href', '#icon-switch-on');
      } else if (toggleStatus === onStatus){
      // Exit fullscreen
        if (document.fullscreenElement) {
          document.exitFullscreen()
        }
      // Restore default page 
        header.classList.remove('readerHeaderJs');
        goBackLink.classList.toggle('hidden');
        utilities.classList.toggle('hidden');
        footer.classList.toggle('hidden');
        document.querySelector(".toggle-iconR").setAttribute('href', '#icon-switch-off');
      }
}
readerModeBtn.addEventListener('click', readerMode)
}
/*
const printBtn = document.querySelector('.printBtnJs')
function printStory(){
window.print();}
printBtn.addEventListener('click', printStory)
*/
;
// theNet.js v.0.0.2 easter egg | MIT License | https://oxypteros.com/
/*/ The script will redirect the browser to a "hidden" url when a button is clicked and Ctrl+Shift is pressed./*/
const pi = document.querySelector('.pi');
if (pi){
let insPi = document.querySelector('.ins-pi')
pi.addEventListener('click', function (e) { 
  const currentUrl = window.location.href;
  let targetUrl = `/Gatekeeper/WORP.html`
  let alert = '<div class="story-pi-card flec center alertJs"><div class="alert-card flec"><h2 class="alert-h2">Access Denied</h2><p class="alert-p">"You know nothing John Snow"</p><p>Try again... <br>With a keyboard this time. 😉 </p><button class="alert-btn flex center alertBtnJs">OK</button></div></div>'
  if (currentUrl.includes('/el/')){
    targetUrl = `/secret/el/winner`;
    alert = '<div class="story-pi-card flec center alertJs"><div class="alert-card flec"><h2 class="alert-h2">Σφάλμα Πρόσβασης</h2><p class="alert-p">"You know nothing John Snow"</p><p>Ίσως να δοκίμαζες και με πληκτρολόγιο; 😉 </p><button class="alert-btn flex center alertBtnJs">OK</button></div></div>'
  } 
  if (e.ctrlKey && e.shiftKey || e.metaKey && e.shiftKey) {
    window.location.href = targetUrl;
  } else {
    insPi.insertAdjacentHTML(`beforeend`, alert);
  }
  const ok = document.querySelector('.alertBtnJs');
  ok.addEventListener('click', () => {
    if (insPi){
    let alert = document.querySelector('.alertJs')
    insPi.removeChild(alert)
    //document.location.reload();
    }
});
});
};