// Change the chevron direction on click
const langDetails = document.querySelector('.langDetails');
const icnLang = document.querySelector('.icnLang');
const icnChevron = document.querySelector('.icnChevron');
if (langDetails){
  function changeChevron(){
    if (langDetails.open == false){
      icnChevron.setAttribute('href', '#chevron-down-icn');
      icnLang.classList.add('svg-s-pri');
    } else {
      icnChevron.setAttribute('href', '#chevron-left-icn');
      icnLang.classList.remove('svg-s-pri');
    }
  }
langDetails.addEventListener('click', changeChevron);
}