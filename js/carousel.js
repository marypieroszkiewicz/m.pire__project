// First Carousel

const carouselFirst = document.querySelector('.projects-slider__carousel--1');
const sliderFirst = document.querySelector('.projects-slider__wrap--1');

const nextFirst = document.querySelector('.projects-slider__btn-next--1');
const prevFirst = document.querySelector('.projects-slider__btn-prev--1');
let directionFirst;

nextFirst.addEventListener('click', function() {
  directionFirst = -1;
  carouselFirst.style.justifyContent = 'flex-start';
  sliderFirst.style.transform = 'translate(-33.33%)';
});

prevFirst.addEventListener('click', function() {
  if (directionFirst === -1) {
    directionFirst = 1;
    sliderFirst.appendChild(sliderFirst.firstElementChild);
  }
  carouselFirst.style.justifyContent = 'flex-end';
  sliderFirst.style.transform = 'translate(33.33%)';

});

sliderFirst.addEventListener('transitionend', function() {
  // get the last element and append it to the front
  console.log("fires");
  if (directionFirst === 1) {
    sliderFirst.prepend(sliderFirst.lastElementChild);
  } else {
    sliderFirst.appendChild(sliderFirst.firstElementChild);
  }

  sliderFirst.style.transition = 'none';
  sliderFirst.style.transform = 'translate(0)';
  setTimeout(() => {
    sliderFirst.style.transition = 'all 0.5s';
  })
}, false);


// Second Carousel

const carouselSecond = document.querySelector('.projects-slider__carousel--2');
const sliderSecond = document.querySelector('.projects-slider__wrap--2');

const nextSecond = document.querySelector('.projects-slider__btn-next--2');
const prevSecond = document.querySelector('.projects-slider__btn-prev--2');
let directionSecond;

nextSecond.addEventListener('click', function() {
  directionSecond = -1;
  carouselSecond.style.justifyContent = 'flex-start';
  sliderSecond.style.transform = 'translate(-33.33%)';
});

prevSecond.addEventListener('click', function() {
  if (directionSecond === -1) {
    directionSecond = 1;
    sliderSecond.appendChild(sliderSecond.firstElementChild);
  }
  carouselSecond.style.justifyContent = 'flex-end';
  sliderSecond.style.transform = 'translate(33.33%)';

});

sliderSecond.addEventListener('transitionend', function() {
  // get the last element and append it to the front
  console.log("fires");
  if (directionSecond === 1) {
    sliderSecond.prepend(sliderSecond.lastElementChild);
  } else {
    sliderSecond.appendChild(sliderSecond.firstElementChild);
  }

  sliderSecond.style.transition = 'none';
  sliderSecond.style.transform = 'translate(0)';
  setTimeout(() => {
    sliderSecond.style.transition = 'all 0.5s';
  })
}, false);

// Third Carousel

const carouselThird = document.querySelector('.projects-slider__carousel--3');
const sliderThird = document.querySelector('.projects-slider__wrap--3');

const nextThird = document.querySelector('.projects-slider__btn-next--3');
const prevThird = document.querySelector('.projects-slider__btn-prev--3');
let directionThird;

nextThird.addEventListener('click', function() {
  directionThird = -1;
  carouselThird.style.justifyContent = 'flex-start';
  sliderThird.style.transform = 'translate(-33.33%)';
});

prevThird.addEventListener('click', function() {
  if (directionThird === -1) {
    directionThird = 1;
    sliderThird.appendChild(sliderThird.firstElementChild);
  }
  carouselThird.style.justifyContent = 'flex-end';
  sliderThird.style.transform = 'translate(33.33%)';

});

sliderThird.addEventListener('transitionend', function() {
  // get the last element and append it to the front
  console.log("fires");
  if (directionThird === 1) {
    sliderThird.prepend(sliderThird.lastElementChild);
  } else {
    sliderThird.appendChild(sliderThird.firstElementChild);
  }

  sliderThird.style.transition = 'none';
  sliderThird.style.transform = 'translate(0)';
  setTimeout(() => {
    sliderThird.style.transition = 'all 0.5s';
  })
}, false);

// Fourth Carousel

const carouselFourth = document.querySelector('.projects-slider__carousel--4');
const sliderFourth = document.querySelector('.projects-slider__wrap--4');

const nextFourth = document.querySelector('.projects-slider__btn-next--4');
const prevFourth = document.querySelector('.projects-slider__btn-prev--4');
let directionFourth;

nextFourth.addEventListener('click', function() {
  directionFourth = -1;
  carouselFourth.style.justifyContent = 'flex-start';
  sliderFourth.style.transform = 'translate(-33.33%)';
});

prevFourth.addEventListener('click', function() {
  if (directionFourth === -1) {
    directionFourth = 1;
    sliderFourth.appendChild(sliderFourth.firstElementChild);
  }
  carouselFourth.style.justifyContent = 'flex-end';
  sliderFourth.style.transform = 'translate(33.33%)';

});

sliderFourth.addEventListener('transitionend', function() {
  // get the last element and append it to the front
  console.log("fires");
  if (directionFourth === 1) {
    sliderFourth.prepend(sliderFourth.lastElementChild);
  } else {
    sliderFourth.appendChild(sliderFourth.firstElementChild);
  }

  sliderFourth.style.transition = 'none';
  sliderFourth.style.transform = 'translate(0)';
  setTimeout(() => {
    sliderFourth.style.transition = 'all 0.5s';
  })
}, false);