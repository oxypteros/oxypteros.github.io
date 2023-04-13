/* ADC update component - v.0.0.1-alpha | MIT License | https://oxylab.ml */
// update.js will check if there is a new version of hugo and  of the Alpha theme and inform the user
'use strict;'
const alphaUrl = 'https://oxylab.ml/alpha/version';
const hugoUrl = 'https://api.github.com/repos/gohugoio/hugo/tags';
const localAlpha = document.querySelector('.local-alpha-version');
const localHugo = document.querySelector('.local-hugo-version');
const outputAlpha = document.querySelector('.outputAlphaJs');
const outputHugo = document.querySelector('.outputHugoJs');
const outputAlphaError = document.querySelector('.outputAlphaErrorJs');
const outputHugoError = document.querySelector('.outputHugoErrorJs');
const newAlphaVersion = document.querySelector('.newAlphaVersionJs');
const newHugoVersion = document.querySelector('.newHugoVersionJs');
const updateAlphaError = document.querySelector('.errorAlphaJs');
const updateHugoError = document.querySelector('.errorHugoJs');
const noAlphaUpdate = document.querySelector('.noAlphaUpdateJs');
const noHugoUpdate = document.querySelector('.noHugoUpdateJs');
const updateAlpha = document.querySelector('.updateAlphaJs');
const updateHugo = document.querySelector('.updateHugoJs')
const updateBtn = document.querySelector('.updateBtnJs');
const localAlphaVersion = localAlpha.textContent;
const localHugoVersion = localHugo.textContent;
let remoteAlphaVersion;
let remoteHugoVersion;

function checkUpdate() {
  // Fetch remote Alpha Version
  fetch(alphaUrl)
  .then((responseAlpha) => {
    if(!responseAlpha.ok) {
      updateAlphaError.classList.remove('hiddenJs');
      outputAlphaError.textContent =  responseAlpha.status ;
    } else {
      responseAlpha.text().then((text) => { 
          remoteAlphaVersion = text; 
          compareAlpha();
        })
    }
  })
  .catch((errorAlpha) => {
    updateAlphaError.classList.remove('hiddenJs');
    outputAlphaError.textContent = errorAlpha.message ;
  });
  // Fetch remote Hugo Version
  fetch(hugoUrl)
  .then((responseHugo) => {
    if(!responseHugo.ok){
      updateHugoError.classList.remove('hiddenJs');
      outputHugoError.textContent = responseHugo.status ;
    } else {
      responseHugo.json().then((json) => {
        remoteHugoVersion = json[0].name;
        compareHugo();
      })
    }
  })
  .catch((errorHugo) => {
    updateHugoError.classList.remove('hiddenJs');
    outputHugoError.textContent = errorHugo.message;
  });

  // Compare Alpha Versions and output results
  function compareAlpha() {
    if(remoteAlphaVersion != localAlphaVersion) {
      updateAlpha.classList.remove('hiddenJs');
      newAlphaVersion.innerHTML = remoteAlphaVersion;
    } else {
    noAlphaUpdate.classList.remove('hiddenJs');
    outputAlpha.innerHTML = remoteAlphaVersion;
    }
  }
  // Compare Hugo Versions and output results
  function compareHugo() {
    if(remoteHugoVersion != localHugoVersion) {
      updateHugo.classList.remove('hiddenJs');
      newHugoVersion.innerHTML = remoteHugoVersion;
    } else{
      noHugoUpdate.classList.remove('hiddenJs');
      outputHugo.innerHTML = remoteHugoVersion;
    }
}
}
  // Button to check for updates
  updateBtn.addEventListener('click', checkUpdate);