// import module;
const buttons = document.querySelectorAll('.btn-container .button');
const arrowPrev = document.getElementById('prev-arrow');
const arrowNext = document.getElementById('next-arrow');
const errorModalBtn = document.getElementById('x-icon');
const finishBtn = document.querySelector('.finish');
let pictureId = 1;
let rate = 0
let ratesArr = [];

function verification () {
  buttons.forEach((btn) => {
    btn.classList.remove('selected');
    btn.classList.add('non-selected');
}
)}

function changePicture() {
  if(pictureId <= 15){
    const picture = document.querySelector('.img-container img');
    picture.src = `./assets/animal${pictureId}.jpg`;
  }
}

function checkRate(rate){
  if(rate != 0) {
    pictureId++
    changePicture()
    ratesArr.push(rate);
  }else {
    toggleErrorModal()
    return
  }
}

function toggleErrorModal(){
  console.log("chamou")
  const opacity = document.querySelector('.main-opacity');
  const errorModal = document.querySelector('.error-container');

  opacity.classList.toggle('hide');
  errorModal.classList.toggle('hide');
}

function resetButton(){
  buttons.forEach((btn) => {
    btn.classList.remove('selected');
    btn.classList.add('non-selected');
  })
}

function togglePrevArrow() {
  if(pictureId >= 2){
    const arrowIco = document.getElementById('prev-arrow-ico');
    arrowIco.classList.remove('hide')
  } else {
    const arrowIco = document.getElementById('prev-arrow-ico');
    arrowIco.classList.add('hide')
  }
}

function toggleFinishBtn() {
  if(pictureId >= 15){
    arrowNext.classList.toggle('hide');
    finishBtn.classList.toggle('hide');
  }
}

function finalResult(){

}


buttons.forEach((btn) => btn.addEventListener('click', () => {

  verification();
  rate = parseInt(btn.value);
  btn.classList.toggle('non-selected');
  btn.classList.toggle('selected');
  console.log(rate)
})
)

arrowNext.addEventListener('click', () => {
  checkRate(rate)

  togglePrevArrow()
  resetButton()

  rate = 0;
  toggleFinishBtn()
  console.log(ratesArr)
  console.log(pictureId)
})

arrowPrev.addEventListener('click', () => {
  verification()
  pictureId--
  togglePrevArrow()
  changePicture()

  ratesArr.pop()
  console.log(ratesArr)

})

errorModalBtn.addEventListener('click', toggleErrorModal)

finishBtn.addEventListener('click', () => {
  checkRate(rate);
  console.log(ratesArr);

  const resultScreen = document.querySelector('.result-card');
  const mainContainer = document.querySelector('.main-container')

  if(pictureId > 15){
    mainContainer.classList.add('hide');
    resultScreen.classList.remove('hide');
  }

  // for(let i = 0; i < ratesArr.length; i++){
  //   finalRate += ratesArr[i];
  // }
  let finalRate = ratesArr.reduce((value, rate) => {
    return value + rate;
  }, 0)

  finalRate *= 2 / ratesArr.length;

  

  const resultSpan = document.querySelector('.result-card h2 span');
  resultSpan.innerHTML = finalRate.toFixed(1)



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




  //com o valor final da nota, mostrar a foto e a pontuação do usuario
  //talvez definir o resultado com switch case 

  //mostrar no texto quanto foi a nota em cada caso
})


// aplicar modules