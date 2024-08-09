export function resetButton(){
  const buttons = document.querySelectorAll('.btn-container .button');
  buttons.forEach((btn) => {
    btn.classList.remove('selected');
    btn.classList.add('non-selected');
  })
}

export function changePicture(pictureId){
  if(pictureId <= 15){
    const picture = document.querySelector('.img-container img');
    picture.src = `./assets/animal${pictureId}.jpg`;
  }
}


