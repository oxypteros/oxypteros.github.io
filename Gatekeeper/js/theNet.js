// theNet.js v.0.0.2 easter egg | MIT License | https://oxypteros.com/
/*/ The script will redirect the browser to a "hidden" url when a button is clicked and Ctrl+Shift is pressed./*/
'use strict';
const pi = document.querySelector('.pi');
let ins = document.querySelector('.ins')
pi.addEventListener('click', function (e) { 
  const currentUrl = window.location.href;
  let targetUrl = `/Gatekeeper/WORP.html`
  let alert = '<div class="alert-card-wrapper flec center alertJs"><div class="alert-card flec"><h2 class="alert-h2">Access Denied</h2><p class="alert-p">"You know nothing John Snow"</p><p>Try again... <br>With a keyboard this time. 😉 </p><button class="alert-btn flex center alertBtnJs">OK</button></div></div>'
  if (currentUrl.includes('/el/')){
    targetUrl = `/secret/el/winner`;
    alert = '<div class="alert-card-wrapper flec center alertJs"><div class="alert-card flec"><h2 class="alert-h2">Σφάλμα Πρόσβασης</h2><p class="alert-p">"You know nothing John Snow"</p><p>Ίσως να δοκίμαζες και με πληκτρολόγιο; 😉 </p><button class="alert-btn flex center alertBtnJs">OK</button></div></div>'
  } 
  if (e.ctrlKey && e.shiftKey || e.metaKey && e.shiftKey) {
    window.location.href = targetUrl;
  } else {
    ins.insertAdjacentHTML(`beforeend`, alert);
  }
  const ok = document.querySelector('.alertBtnJs');
  ok.addEventListener('click', () => {
    if (ins){
    let alert = document.querySelector('.alertJs')
    ins.removeChild(alert)
    //document.location.reload();
    }
});
});