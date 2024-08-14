// import module;
import { toggleErrorModal } from './alert-error.js';
import { resetButton, changePicture } from './utils.js'
import { togglePrevArrow, toggleFinishBtn } from './arrows.js';

const buttons = document.querySelectorAll('.btn-container .button');
const arrowPrev = document.getElementById('prev-arrow');
const arrowNext = document.getElementById('next-arrow');
const errorModalBtn = document.getElementById('x-icon');
const finishBtn = document.querySelector('.finish');

let pictureId = 1;
let rate = 0
let ratesArr = [];

function checkNaN(rate){
  if(rate != 0) {
    pictureId++
    changePicture(pictureId)
    ratesArr.push(rate);
  }else {
    toggleErrorModal()
    return
  }
}

buttons.forEach((btn) => btn.addEventListener('click', () => {
  resetButton();
  rate = parseInt(btn.value);
  btn.classList.toggle('non-selected');
  btn.classList.toggle('selected');
})
)

arrowNext.addEventListener('click', () => {
  checkNaN(rate)

  togglePrevArrow(pictureId)
  resetButton()

  rate = 0;
  toggleFinishBtn(pictureId)
  console.log(ratesArr)
  console.log(pictureId)
})

arrowPrev.addEventListener('click', () => {
  resetButton()
  pictureId--
  togglePrevArrow(pictureId)
  changePicture(pictureId)

  ratesArr.pop()
  console.log(ratesArr)
})

errorModalBtn.addEventListener('click', toggleErrorModal)

finishBtn.addEventListener('click', () => {
  checkNaN(rate);

  const resultScreen = document.querySelector('.result-card');
  const mainContainer = document.querySelector('.main-container')

  if(pictureId > 15){
    mainContainer.classList.add('hide');
    resultScreen.classList.remove('hide');
  }

  let finalRate = ratesArr.reduce((value, rate) => {
    return value + rate;
  }, 0)

  finalRate *= 2 / ratesArr.length;

  const resultSpan = document.querySelector('.result-card h2 p');
  resultSpan.innerHTML = finalRate.toFixed(1)
  console.log(finalRate)
 // Refatorar
  if(finalRate <= 3){
    const resultModal = document.querySelector('.rate1');
    resultModal.classList.toggle('hide')
  } else if(finalRate <= 8){
    const resultModal = document.querySelector('.rate2');
    resultModal.classList.toggle('hide')
  } else {
    const resultModal = document.querySelector('.rate3');
    resultModal.classList.toggle('hide')
  }
})

// fazer um botão de restart no app