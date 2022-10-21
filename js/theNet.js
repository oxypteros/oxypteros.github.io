// theNet.js v.0.0.1 | MIT License | https://oxypteros.github.io
/*! This script will redirect you to a page of your choosing, pseudo emulating the π backdoor from the film The Net.!*/
'use strict';
// Add an element with class="pi" at your html
const pi = document.querySelector('.pi');

//Change the url below to your target url
let targetUrl = '/lab/index.html';

//Whenever you click on the element with the pi class you will be redirected to your target Url.
pi.addEventListener('click', function (e) { 
  const currentUrl = window.location.href;
  window.location.href = targetUrl;
});

