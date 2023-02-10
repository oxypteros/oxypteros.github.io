'use strict';
const contactBtn = document.querySelector('.contactBtnJs');
const privBtn = document.querySelector('.privBtnJs');
const credBtn = document.querySelector('.credBtnJs');

const contactCard = document.querySelector('.contactCardJs');
const privCard = document.querySelector('.privCardJs');
const credCard = document.querySelector('.credCardJs')

const contactClsBtn = document.querySelector('.contactClsBtnJs');
const privClsBtn = document.querySelector('.privClsBtnJs');
const credClsBtn = document.querySelector('.credClsBtnJs');

if (privBtn && credBtn && contactBtn){
  // Contact Card
  function showContactCard(){    
    let contactCardHidden = contactCard.classList.contains('hidden');
    let privCardHidden = privCard.classList.contains('hidden');
    let credCardHidden = credCard.classList.contains('hidden');

  if (privCardHidden === true && contactCardHidden === true && credCardHidden === true ){
    contactCard.classList.toggle('hidden');
  } else if (contactCardHidden === true && privCardHidden === false) {
    privCard.classList.toggle('hidden');
    contactCard.classList.toggle('hidden');
  } else if (contactCardHidden === true && credCardHidden === false) {
    credCard.classList.toggle('hidden');
    contactCard.classList.toggle('hidden');
  } else {
    contactCard.classList.toggle('hidden');
  }
}
// Contact Buttons open/close
  contactBtn.addEventListener('click', showContactCard);
  contactClsBtn.addEventListener('click', showContactCard);
  // Privacy Card
  function showPrivCard(){    
    let contactCardHidden = contactCard.classList.contains('hidden');
    let privCardHidden = privCard.classList.contains('hidden');
    let credCardHidden = credCard.classList.contains('hidden');

  if (privCardHidden === true && contactCardHidden === true && credCardHidden === true ){
    privCard.classList.toggle('hidden');
  } else if (privCardHidden === true && contactCardHidden === false) {
    contactCard.classList.toggle('hidden');
    privCard.classList.toggle('hidden');
  } else if (privCardHidden === true && credCardHidden === false) {
    credCard.classList.toggle('hidden');
    privCard.classList.toggle('hidden');
  } else {
    privCard.classList.toggle('hidden');
  }
}
// Privacy Buttons open/close
  privBtn.addEventListener('click', showPrivCard);
  privClsBtn.addEventListener('click', showPrivCard);
  
  // Credits card
  function showCredCard(){    
    let contactCardHidden = contactCard.classList.contains('hidden');
    let privCardHidden = privCard.classList.contains('hidden');
    let credCardHidden = credCard.classList.contains('hidden');

  if (privCardHidden === true && contactCardHidden === true && credCardHidden === true ){
    credCard.classList.toggle('hidden');
  } else if (credCardHidden === true && privCardHidden === false) {
    privCard.classList.toggle('hidden');
    credCard.classList.toggle('hidden');
  } else if (credCardHidden === true && contactCardHidden === false) {
    contactCard.classList.toggle('hidden');
    credCard.classList.toggle('hidden');
  } else {
    credCard.classList.toggle('hidden');
  }
}
// Credits Buttons open/close
  credBtn.addEventListener('click', showCredCard);
  credClsBtn.addEventListener('click', showCredCard);
}

// Email me 
const sendMe = document.querySelector('.sendMeJs');


if (sendMe) {
  function sendIt(){
    let contactCardHidden = contactCard.classList.contains('hidden');
    if (contactCardHidden === false ){
    window.location.href = "mailto:oxypteros@gmail.com";
    }
  }
  sendMe.addEventListener('click', sendIt);
}
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