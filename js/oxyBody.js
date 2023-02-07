'use strict';
const privBtn = document.querySelector('.privBtnJs');
const credBtn = document.querySelector('.credBtnJs')
const privCard = document.querySelector('.privCardJs')
const privClsBtn = document.querySelector('.privClsBtnJs')
const credClsBtn = document.querySelector('.credClsBtnJs')
if (privBtn){
  
  console.log(privCard)
  function showPrivCard(){
    let privCardHidden = privCard.classList.contains('hidden');
  if (privCardHidden === true){
    privCard.classList.toggle('hidden');
  } else {
    privCard.classList.toggle('hidden');
  }
}
  privBtn.addEventListener('click', showPrivCard);
  privClsBtn.addEventListener('click', showPrivCard);
}
/*
const navSmall = document.querySelector('.nav-small');
const navMedium = document.querySelector('.nav-medium');
  function closeSmallMenu() {
    // Hide nav menu container and show button bar
    if(navBtnBarSmall.classList.contains('hidden')) {
      navMenuSmall.classList.add('hidden');
      navBtnBarSmall.classList.remove('hidden');
    }
  };
  // Event listeners for open close buttons and click outside of bounds
  hamBtnSmall.addEventListener('click', openSmallMenu);
*/