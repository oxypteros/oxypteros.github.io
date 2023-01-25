'use strict';
/* Constants for the two screen sizes nav bars with hamburger menu(small, medium, large) */
const navSmall = document.querySelector('.nav-small');
const navMedium = document.querySelector('.nav-medium');
//const navLarge = document.querySelector('.nav-large');
/* Check what size nav bar is shown to the user */
const checkNavSmall = window.getComputedStyle(navSmall).display;
const checkNavMedium = window.getComputedStyle(navMedium).display;
//const checkNavLarge = window.getComputedStyle(navLarge).display;
/* Constant for when the user click outside of the menus */
const cover = document.querySelector('.cover')
const main = document.querySelector('.mainJs');

/* Hamburger Nav Menu for SMALL screens.*/
// If small nav bar is shown
if (checkNavSmall === 'block') {
  // Open/close buttons
  const hamBtnSmall = document.getElementById('hamBtnSmallJs');
  const closeBtnSmall = document.getElementById('closeBtnSmallJs');
  // Button bar and nav menu container
  const navBtnBarSmall = document.getElementById('navBarSmallJs')
  const navMenuSmall = document.getElementById('navMenuSmallJs')
  // Open small hamburger menu function 
  function openSmallMenu() {
    // Hide button bar and show nav menu container
    if(navMenuSmall.classList.contains('hidden')) {
      navBtnBarSmall.classList.add('hidden');
      navMenuSmall.classList.remove('hidden');
      }
    };
  // Close small nav menu function 
  function closeSmallMenu() {
    // Hide nav menu container and show button bar
    if(navBtnBarSmall.classList.contains('hidden')) {
      navMenuSmall.classList.add('hidden');
      navBtnBarSmall.classList.remove('hidden');
    }
  };
  // Event listeners for open close buttons and click outside of bounds
  hamBtnSmall.addEventListener('click', openSmallMenu);
  closeBtnSmall.addEventListener('click', closeSmallMenu);
  if (cover) {
  cover.addEventListener('click', closeSmallMenu);
  }
  main.addEventListener('click', closeSmallMenu);
}

/* Hamburger Nav Menu for MEDIUM screens.*/
// If medium nav bar is shown
if (checkNavMedium === 'block') {
  // Open/close buttons
  const hamBtnMedium = document.getElementById('hamBtnMediumJs');
  const closeBtnMedium = document.getElementById('closeBtnMediumJs');
  // Button bar and nav menu container
  const navBtnBarMedium = document.getElementById('navBarMediumJs')
  const navMenuMedium = document.getElementById('navMenuMediumJs')
  // Open medium hamburger menu function 
  function openMediumMenu() {
    // Hide button bar and show nav menu container
    if(navMenuMedium.classList.contains('hidden')) {
      navBtnBarMedium.classList.add('hidden');
      navMenuMedium.classList.remove('hidden');
      }
    };
  // Close small nav menu function 
  function closeMediumMenu() {
    // Hide nav menu container and show button bar
    if(navBtnBarMedium.classList.contains('hidden')) {
      navMenuMedium.classList.add('hidden');
      navBtnBarMedium.classList.remove('hidden');
    }
  };

  // Event listeners for open close buttons and click outside of bounds
  hamBtnMedium.addEventListener('click', openMediumMenu);
  closeBtnMedium.addEventListener('click', closeMediumMenu);
  cover.addEventListener('click', closeSmallMenu);
  main.addEventListener('click', closeMediumMenu);
}

// Carousel 
const carousel = document.querySelector('.carousel');
if(carousel) {
  const carouselList = document.querySelector('.carousel-list-items');
  const carouselItem = document.querySelector('.carousel-item');

  // Count the items of the carousel
  const carouselItemsNum = document.querySelectorAll(".carousel-list-items li").length;
  
  //Previous Btn
  const carouselPrvBtn = document.getElementById('prev-carousel-btn');
  //Next Btn
  const carouselNxtBtn = document.getElementById('next-carousel-btn');

  // Item Width
  const carouselItemWidth = carouselItem.clientWidth;

  // Initial counters for next item and previous item
  var itemNum = 1;

  // Next Slide Function
  function nextItem() {
    let carouselItemWidth1 = carouselItem.clientWidth;
    carouselList.scrollLeft += carouselItemWidth1;
    itemNum += 1;
    console.log(carouselItemWidth1);
    if (itemNum > 1 ){
      // Enable previous btn for all items but the first
      carouselPrvBtn.disabled = false;
    }
    if (itemNum === carouselItemsNum) {
      // Disable next button for the last item
      carouselNxtBtn.disabled = true;
    }
    console.log('NextItem:' + itemNum)
  }

  // Previous Slide Function
  function previousItem() {
    carouselList.scrollLeft -= carouselItemWidth;
    itemNum -= 1;
    if (itemNum < carouselItemsNum ){
      // Enable previous btn for all items but the first
      carouselNxtBtn.disabled = false;
    }
    if (itemNum === 1) {
      // Disable next button for the last item
      carouselPrvBtn.disabled = true;
    }
    console.log('PrvItem:' + itemNum)
  }
  //Carousel btns event listeners
  carouselPrvBtn.addEventListener('click', previousItem);
  carouselNxtBtn.addEventListener('click', nextItem);
}

/*
// Hamburger Nav Menu for LARGE screens.
// If large nav bar is shown
if (checkNavLarge === 'block') {
  // Open/close buttons
  const hamBtnLarge = document.getElementById('hamBtnLargeJs');
  const closeBtnLarge = document.getElementById('closeBtnLargeJs');
  // Button bar and nav menu container
  const navBtnBarLarge = document.getElementById('navBarLargeJs')
  const navMenuLarge = document.getElementById('navMenuLargeJs')
  // Open medium hamburger menu function 
  function openLargeMenu() {
    // Hide button bar and show nav menu container
    if(navMenuLarge.classList.contains('hidden')) {
      navBtnBarLarge.classList.add('hidden');
      navMenuLarge.classList.remove('hidden');
      }
    };
  // Close small nav menu function 
  function closeLargeMenu() {
    // Hide nav menu container and show button bar
    if(navBtnBarLarge.classList.contains('hidden')) {
      navMenuLarge.classList.add('hidden');
      navBtnBarLarge.classList.remove('hidden');
    }
  };
  // Event listeners for open close buttons and click outside of bounds
  hamBtnLarge.addEventListener('click', openLargeMenu);
  closeBtnLarge.addEventListener('click', closeLargeMenu);
  main.addEventListener('click', closeLargeMenu);
}
*/