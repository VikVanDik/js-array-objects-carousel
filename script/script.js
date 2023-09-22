// 1. Recuperare la versione bonus dei file del carousel.


// 2. Sostituire l'array di img con l'array di oggetti.
const img = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morales',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
]


const imgWrapper = document.querySelector('.images')
const buttonDown = document.querySelector('.button-down')
const buttonUp = document.querySelector('.button-up')
const thumbWrapper = document.querySelector('.thumb-container')
imgWrapper.innerHTML = ``

// 4a. Creare un contatore e collegarlo al ciclo così da poterlo utilizzare per aggiungere e togliere classi desiderate.
let imgCounter = 0


// 3a. Collegare l'array ad un ciclo così da ottenere l'elemento che cicla.

// 3. Modificare i cicli e renderli compatibili con l'array di oggetti.

 for (let game of img) {
   console.log(game.image);
   console.log(game.title);
   console.log(game.text);

   imgWrapper.innerHTML += `
   <img src="${game.image}" class="hide item">
        <div class="info hide">
          <h3>${game.title}</h3>
          <div class="info-text">${game.text}</div>
        </div>
   `
   thumbWrapper.innerHTML += `<img src="${game.image}" alt="" class="item-mini">`
 }


// for(let i = 0; i<img.length; i++){
//   const image = img[i]
//   console.log(image);
//   imgWrapper.innerHTML += `<img src=${image} class="hide item">`
//   thumbWrapper.innerHTML += `<img src="${image}" alt="" class="item-mini">`
//   console.log(imgWrapper)
// }

const hideImg = document.getElementsByClassName('item')
const activeImg = document.getElementsByClassName ('item-mini')
const activeInfo = document.getElementsByClassName('info')
console.log(hideImg);


hideImg[imgCounter].classList.remove('hide')
activeImg[imgCounter].classList.add('active')
activeInfo[imgCounter].classList.remove('hide')


// 5a. Creare i bottoni così da poter triggerare l'azione del counter.
buttonDown.addEventListener('click', btnDown)

buttonUp.addEventListener('click', btnUp)

let intervalDown;
function autoplayDown (){
  intervalDown = setInterval (btnDown, 3000)
}

let intervalUp;
function autoplayUp (){
  intervalUp = setInterval (btnUp, 3000)
} 

const buttonReverse = document.querySelector('.button-reverse')

autoplayDown()
let autoPlayFlag = true

buttonReverse.addEventListener('click', function(){
  if (autoPlayFlag === true) {
    clearInterval(intervalDown)
    autoplayUp()
    autoPlayFlag = false
  } else {
    clearInterval(intervalUp)
    autoplayDown()
    autoPlayFlag = true
  }
})


function btnDown(){
  activeImg[imgCounter].classList.remove('active')
  hideImg[imgCounter].classList.add('hide')
  activeInfo[imgCounter].classList.add('hide')
  imgCounter++
  if (imgCounter === img.length) {
    imgCounter = 0
  }
  activeImg[imgCounter].classList.add('active')
  hideImg[imgCounter].classList.remove('hide')
  activeInfo[imgCounter].classList.remove('hide')
}

function btnUp(){
  activeImg[imgCounter].classList.remove('active')
  hideImg[imgCounter].classList.add('hide')
  activeInfo[imgCounter].classList.add('hide')
  if (imgCounter === 0) {
    imgCounter = img.length
  }
  imgCounter--
  hideImg[imgCounter].classList.remove('hide')
  activeImg[imgCounter].classList.add('active')
  activeInfo[imgCounter].classList.remove('hide')
}