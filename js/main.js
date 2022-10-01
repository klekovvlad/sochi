document.querySelector('.circle').innerHTML = "Наш опыт работы 10 лет Наш опыт работы 10 лет".split('')
  .map((e,i) => `<span class="trigger" style="--rot:${i*7.8}deg">${e}</span>`).join('');

const imageCard = document.querySelectorAll('.house__box-top');

imageCard.forEach(imageItem => {
  const infoCard = imageItem.querySelector('.house__box-info');
  imageItem.addEventListener('mouseover', () => {
    infoCard.classList.add('show');
  });
  imageItem.addEventListener('mouseout', () => {
    infoCard.classList.remove('show');
  });
});

const quizApart = document.querySelector('.quiz-apart');
const quizHouse = document.querySelector('.quiz-house');
const quizApartBtn = document.querySelectorAll('.apart-open');
const quizHouseBtn = document.querySelectorAll('.house-open');
const quizButtonApart = document.querySelectorAll('.quiz-btn-apart');
const quizButtonHouse = document.querySelectorAll('.quiz-btn-house');
const quizClose = document.querySelectorAll('.quiz__close');
const qestionApart = document.querySelectorAll('.question-apart');
const qestionHouse = document.querySelectorAll('.question-house');

let i = 0;
let n = 1;

quizButtonApart.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    qestionApart[i].style.display = "none";
    qestionApart[n].style.display = "block";
    i++
    n++
  });
});

let x = 0
let y = 1

quizButtonHouse.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    qestionHouse[x].style.display = "none";
    qestionHouse[y].style.display = "block";
    x++
    y++
  });
});

quizApartBtn.forEach(apartOpen => {
  apartOpen.addEventListener('click', () => {
    quizApart.classList.toggle('open');
  })
});
quizHouseBtn.forEach(apartOpen => {
  apartOpen.addEventListener('click', () => {
    quizHouse.classList.toggle('open');
  })
});

quizClose.forEach(quizCloseBtn => {
  quizCloseBtn.addEventListener('click', () => {
    quizApart.classList.remove('open');
    quizHouse.classList.remove('open');
  })
});

const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupPresent = document.querySelectorAll('.present');
const popupOnline = document.querySelectorAll('.online');
const popupHeader = document.querySelector('.popup__body-header')

popupPresent.forEach(presentOpen => {
  presentOpen.addEventListener('click', (event) => {
    event.preventDefault();
    popup.classList.add('open');
    popupHeader.innerHTML = 'Получить презентацию'
  })
});

popupOnline.forEach(onlineOpen => {
  onlineOpen.addEventListener('click', (event) => {
    event.preventDefault();
    popup.classList.add('open');
    popupHeader.innerHTML = 'Заказать онлайн просмотр'
  })
});

popupClose.addEventListener('click', () => {
  popup.classList.remove('open');
})
