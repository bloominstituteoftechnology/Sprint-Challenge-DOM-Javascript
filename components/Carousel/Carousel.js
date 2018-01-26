class Carousel {
  constructor(element) {
    this.element = element;
    this.carousel = document.querySelectorAll('.Carousel__item');
    this.carousel = Array.from(this.carousel).map(carousel => new Array(carousel));
    console.log(this.carousel);
    this.element.addEventListener('click', event => {
      if (event.target.className === 'Carousel__arrow-left') {
        this.previousSlide();
        event.stopPropagation();
      }

      if (event.target.className === 'Carousel__arrow-right') {
        this.nextSlide();
        event.stopPropagation();
      }
    });
    this.index = 0;
  }

  nextSlide() {
    this.carousel[this.index][0].classList.remove('Carousel__item-focused');
    this.index++;
    this.resetIndex();
    this.carousel[this.index][0].classList.add('Carousel__item-focused');
  }

  previousSlide() {
    this.carousel[this.index][0].classList.remove('Carousel__item-focused');
    this.index--;
    this.resetIndex();
    this.carousel[this.index][0].classList.add('Carousel__item-focused');
  }

  resetIndex() {
    if (this.index < 0) {
      this.index = this.carousel.length;
      console.log(this.index);
      console.log(this.carousel.length);
    }
    if (this.index >= this.carousel.length) {
      this.index = 0;
    }
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

// -----

// var controls = document.querySelectorAll('.controls');
// for(var i=0; i<controls.length; i++){
//     controls[i].style.display = 'inline-block';
// }

// var slides = document.querySelectorAll('#slides .slide');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,2000);

// function nextSlide(){
//     goToSlide(currentSlide+1);
// }

// function previousSlide(){
//     goToSlide(currentSlide-1);
// }

// function goToSlide(n){
//     slides[currentSlide].className = 'slide';
//     currentSlide = (n+slides.length)%slides.length;
//     slides[currentSlide].className = 'slide showing';
// }


// var playing = true;
// var pauseButton = document.getElementById('pause');

// function pauseSlideshow(){
//     pauseButton.innerHTML = '&#9658;'; // play character
//     playing = false;
//     clearInterval(slideInterval);
// }

// function playSlideshow(){
//     pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
//     playing = true;
//     slideInterval = setInterval(nextSlide,2000);
// }

// pauseButton.onclick = function(){
//     if(playing){ pauseSlideshow(); }
//     else{ playSlideshow(); }
// };

// var next = document.getElementById('next');
// var previous = document.getElementById('previous');

// next.onclick = function(){
//     pauseSlideshow();
//     nextSlide();
// };
// previous.onclick = function(){
//     pauseSlideshow();
//     previousSlide();
// };