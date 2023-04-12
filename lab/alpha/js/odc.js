'use strict';
const odcBtn = document.querySelector('.odcBtnJs');
const odc = document.querySelector('.odcJs')
const odcBtnCls = document.querySelector('.odcBtnClsJs');
const bug = document.querySelector('.bugJs');
if (odcBtn){
  if (bug){
    const bugIcn = document.querySelector('.bugIcnJs');
    bugIcn.setAttribute('href', '#bug-icn');
  }
  let odcShow = localStorage.getItem('odc');
  if (odcShow === null){
    localStorage.setItem('odc', '0')
    console.log('odc: 0')
  } else if (odcShow === '1'){
    console.log('odc: 1');
    odc.classList.toggle('hide');
  }
  function odcStatus(){
    if (odcShow === '1'){
      ocd.classList.toggle('hide');
      localStorage.setItem('odc', '0');
      
    } else if (odcShow === '0'){
      odc.classList.toggle('hide');
      localStorage.setItem('odc', '1')
    }
  }
  function odcClose(){
    odc.classList.toggle('hide');
    localStorage.setItem('odc', '0');
  }
    odcBtn.addEventListener('click', odcStatus);
    odcBtnCls.addEventListener('click', odcClose);
}
/* 
* alphaTheme.js (Color theme changer for alpha theme) - v0.0.1 - MIT License - oxypteros.com/designs/alpha 

const btnDark = document.querySelector('.btnDarkJs');
const btnLight = document.querySelector('.btnLightJs');

let supportCSS = CSS.supports('color', 'var(--bgc)');

if ((supportCSS = true)) {

  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let alphaDark = localStorage.getItem('alpha-dark');

  if (alphaDark === 'true') {
    document.body.classList.toggle('alpha-dark');
  }

  if (alphaDark === null && prefersDarkScheme === true) {
    document.body.classList.toggle('alpha-dark');
    localStorage.setItem('alpha-dark', 'true');
  }
  
  if (btnDark) {
    function changeAlphaTheme() {
      let alphaDark = localStorage.getItem('alpha-dark');
      if (alphaDark === 'true') {
        document.body.classList.toggle('alpha-dark');
        localStorage.setItem('alpha-dark', 'false');
      } else {
        document.body.classList.toggle('alpha-dark');
        localStorage.setItem('alpha-dark', 'true');
      }
    }
  
    btnDark.addEventListener('click', changeAlphaTheme);
  }
} else {
  btnDark.classList.add('hide');
}
/*
 * END alphaTheme.js
 */