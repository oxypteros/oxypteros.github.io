// theNet.js v.0.0.1 easter egg | MIT License | https://www.phoenicus.com/
/*/ The script will redirect the browser to "hidden" url when a button is clicked and Ctrl+Shift is pressed./*/
'use strict';
const pi = document.querySelector(`.the-net`);
pi.addEventListener(`click`, function (e) { 
  const currentUrl = window.location.href;
  let targetUrl = `/secret/winner`
  let alert = `"You know nothing, Jon Snow!"\n\nTry again... with a keyboard this time. 😉`
  if (currentUrl.includes('/el/')){
    targetUrl = `/secret/el/winner`;
    alert = `"You know nothing, Jon Snow!"\n\nΊσως να δοκίμαζες και με το πληκτρολόγιο; 😉`
  } 
  if (e.ctrlKey && e.shiftKey || e.metaKey && e.shiftKey) {
    window.location.href = targetUrl;
  } else {
    window.alert(alert);
  }
});