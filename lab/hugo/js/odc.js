/* ODC update component - v.0.0.1-alpha | MIT License | https://oxylab.ml */
// update.js will check if there is a new version of hugo and  of the Alpha theme and inform the user
'use strict;'
const alphaUrl = 'https://oxypteros.com/alpha/version';
const hugoUrl = 'https://api.github.com/repos/gohugoio/hugo/tags';
const errorOdc = document.querySelector('.error');
const bug = document.querySelector('.bug');
const cntOdc = document.querySelector('.cntOdc');
const odcOpenBtn = document.querySelector('.odcOpenBtn')
const odcClsBtn = document.querySelector('.odcClsBtn');
const odcPinBtn = document.querySelector('.odcPinBtn');
const pin = document.querySelector('.pin'); 
const noError = document.querySelector('.no-error');
const localAlpha = document.querySelector('.localAlpV');
const localHugo = document.querySelector('.localHugoV');
const outputAlphaError = document.querySelector('.error-alpha');
const outputHugoError = document.querySelector('.error-hugo');
const newAlphaVersion = document.querySelector('.update-alpha');
const newHugoVersion = document.querySelector('.update-hugo');
const updateAlphaError = document.querySelector('.er-alp');
const updateHugoError = document.querySelector('.er-hugo');
const noAlphaUpdate = document.querySelector('.no-up-alp');
const noHugoUpdate = document.querySelector('.no-up-hugo');
const updateAlpha = document.querySelector('.up-alp');
const updateHugo = document.querySelector('.up-hugo')
const updateBtn = document.querySelector('.updateBtnJs');
const localAlphaVersion = localAlpha.textContent;
const localHugoVersion = localHugo.textContent;
let remoteAlphaVersion;
let remoteHugoVersion;
let odcCheck = localStorage.getItem('odc');
if (errorOdc){
  bug.setAttribute('href', '#bug-icn');
  noError.classList.add('hide')
}
if(odcCheck === "pinned"){
  cntOdc.classList.remove('hide');
  cntOdc.classList.add("show-trans");
  pin.setAttribute('href', '#pinned-icn');
}

function toggleOdc(){
  cntOdc.classList.toggle('hide');
  setTimeout(() => {
    cntOdc.classList.add("show-trans");
  }, 100);
}
function closeOdc(){
  cntOdc.classList.toggle('hide');
  setTimeout(() => {
    cntOdc.classList.remove("show-trans");
  }, 100);
}
function pinOdc(){
  let odc = localStorage.getItem('odc');
  console.log(odc)
  if(odc === null){
  localStorage.setItem('odc', 'pinned');
  pin.setAttribute('href', '#pinned-icn');
  } else if (odc === "pinned") {
    console.log('2 ' + odc)
    localStorage.removeItem('odc');
    pin.setAttribute('href', '#pin-icn');
  }
}
function checkUpdate() {
  // Fetch remote Alpha Version
  fetch(alphaUrl)
  .then((responseAlpha) => {
    if(!responseAlpha.ok) {
      updateAlpha.classList.add('hide');
      noAlphaUpdate.classList.add('hide');
      noError.classList.add('hide');
      updateAlphaError.classList.remove('hide');
      outputAlphaError.classList.remove('hide');
      outputAlphaError.textContent = '{{ i18n "AlphaCheckFailed" . }} ' + '(' + responseAlpha.status + ')';
    } else {
      responseAlpha.text().then((text) => { 
        remoteAlphaVersion = text; 
        setTimeout(() => {
          compareAlpha();
        }, 400);
        
      })
    }
  })
  .catch((errorAlpha) => {
    updateAlpha.classList.add('hide');
    noAlphaUpdate.classList.add('hide');
    noError.classList.add('hide');
    updateAlphaError.classList.remove('hide');
    outputAlphaError.classList.remove('hide');
    outputAlphaError.textContent ='{{ i18n "AlphaCheckFailed" . }} ' + '(' + errorAlpha.message + ')';
  });
  // Fetch remote Hugo Version
  fetch(hugoUrl)
  .then((responseHugo) => {
    if(!responseHugo.ok){
      updateHugo.classList.add('hide');
      noHugoUpdate.classList.add('hide');
      noError.classList.add('hide');
      updateHugoError.classList.remove('hide');
      outputHugoError.classList.remove('hide');
      outputHugoError.textContent = '{{ i18n "HugoCheckFailed" . }} ' + '(' + responseHugo.status + ')';
    } else {
      responseHugo.json().then((json) => {
        remoteHugoVersion = json[0].name;
        setTimeout(() => { 
          compareHugo();
        }, 300);
       
      })
    }
  })
  .catch((errorHugo) => {
    updateHugo.classList.add('hide');
    noHugoUpdate.classList.add('hide');
    noError.classList.add('hide');
    updateHugoError.classList.remove('hide');
    outputHugoError.classList.remove('hide');
    outputHugoError.textContent = '{{ i18n "HugoCheckFailed" . }} ' + '(' + errorHugo.message + ')';
  });
  setTimeout(() => {
  }, 300);
  // Compare Alpha Versions and output results
  function compareAlpha() {
    if(remoteAlphaVersion !== localAlphaVersion) {
      noAlphaUpdate.classList.add('hide');
      updateAlphaError.classList.add('hide');
      updateAlpha.classList.remove('hide');
      newAlphaVersion.innerHTML = remoteAlphaVersion;
      console.log('Alpharemote: ' + remoteAlphaVersion + ' local ' + localAlphaVersion )
    } else {
      updateAlphaError.classList.add('hide');
      updateAlpha.classList.add('hide');
      noAlphaUpdate.classList.remove('hide');

    }
  }
  // Compare Hugo Versions and output results
  function compareHugo() {
    if(remoteHugoVersion !== localHugoVersion) {
      noHugoUpdate.classList.add('hide');
      updateHugoError.classList.add('hide');
      updateHugo.classList.remove('hide');
      newHugoVersion.innerHTML = remoteHugoVersion;
      updateHugo.setAttribute('href','https://github.com/gohugoio/hugo/releases/tag/'+ remoteHugoVersion);
    } else{
      updateHugo.classList.add('hide');
      updateHugoError.classList.add('hide');
      noHugoUpdate.classList.remove('hide');
    }
}
}
  // Button to open ODC
  odcOpenBtn.addEventListener('click', toggleOdc)
  // Button to close ODC
  odcClsBtn.addEventListener('click', closeOdc);
  //Button to pin ODC
  odcPinBtn.addEventListener('click', pinOdc);
  // Button to check for updates
  updateBtn.addEventListener('click', checkUpdate);