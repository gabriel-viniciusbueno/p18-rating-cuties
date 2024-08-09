 export function togglePrevArrow(pictureId) {
  if(pictureId >= 2){
    const arrowIco = document.getElementById('prev-arrow-ico');
    arrowIco.classList.remove('hide')
  } else {
    const arrowIco = document.getElementById('prev-arrow-ico');
    arrowIco.classList.add('hide')
  }
}

export function toggleFinishBtn(pictureId) {
  const arrowNext = document.getElementById('next-arrow');
  const finishBtn = document.querySelector('.finish');
  if(pictureId >= 15){
    arrowNext.classList.toggle('hide');
    finishBtn.classList.toggle('hide');
  }
}