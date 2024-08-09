 export function toggleErrorModal(){
  console.log("chamou")
  const opacity = document.querySelector('.main-opacity');
  const errorModal = document.querySelector('.error-container');

  opacity.classList.toggle('hide');
  errorModal.classList.toggle('hide');
}