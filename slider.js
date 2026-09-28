// Переменные для слайдера

let currentIndex = 0;
const sliderImg = document.querySelectorAll('.slider_img');
const prev = document.querySelector('.btn_prev');
const next = document.querySelector('.btn_next');
const sliderWrapper = document.querySelector('.slider_wrapper');
const progressWrapper = document.querySelector(".progress_wrapper");
const progress1 = document.querySelector(".progress1");
const progress2 = document.querySelector(".progress2");
const progress3 = document.querySelector(".progress3");



// Функция перелистывания картинок

function goToSlide(index) {
  if (index < 0) {
    index = sliderImg.length - 1;
  } else if (index >= sliderImg.length) {
    index = 0;
  }
  currentIndex = index;
  document.querySelector('.slider_track').style.transform = `translateX(-${currentIndex * 100/3}%)`;

}

// Функция листания вперед

function goToNextSlide() {
  goToSlide(currentIndex + 1);

}
 //Функция листания назад

function goToPrevSlide() {
  goToSlide(currentIndex - 1);
}

// Листание по клику на кнопки

prev.addEventListener('click', goToPrevSlide);
next.addEventListener('click', goToNextSlide);

//пауза при mousemove и возврат к прокрутке при mouseout

 let hover;   

  sliderWrapper.addEventListener('mousemove', () => hover = 1);
  sliderWrapper.addEventListener('mouseout', () => hover = 0);
 next.addEventListener('mousemove', () => hover = 1);
  next.addEventListener('mouseout', () => hover = 0);
  prev.addEventListener('mousemove', () => hover = 1);
  prev.addEventListener('mouseout', () => hover = 0);

  // запуск слайдера
  
 setInterval(() => !hover && goToNextSlide(), 6000);