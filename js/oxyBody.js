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

