class Carousel {
  // constructor(){
  //   this.activeItem = document.querySelector('.Carousel__item-focused');
  //   this.leftArrow = document.querySelector('.Carousel__arrow-left');
  //   this.rightArrow = document.querySelector('.Carousel__arrow-right');
  //   this.carouselItems = document.querySelectorAll('.Carousel__item');
  //   this.carouselItems = Array.from(carouselItems);
  // }

  // moveRight() {
  //   if (this.carouselItems.indexOf(this.activeItem) === this.carouselItems.length - 1) {
  //     this.activeItem = this.carouselItems[0];
  //   }
  //   this.activeItem = this.carouselItems[this.carouselItems.indexOf(this.activeItem) + 1];
  // }
  // moveLeft() {
  //   if (this.carouselItems.indexOf(this.activeItem) === 0) {
  //     this.activeItem = this.carouselItems[this.carouselItems.length - 1];
  //   }
  //   this.activeItem = this.carouselItems[this.carouselItems.indexOf(this.activeItem) - 1];
  // }
  // deselect() {
  //   console.log(this.activeItem);
  //   this.activeItem.classList.remove('Carousel__item-focused');
  // }
  // select() {
  //   this.activeItem.classList.add('Carousel__item-focused');
  // }
  // leftArrow.addEventListener('click', () => {
  //   deselect();
  //   moveLeft();
  //   select();
  // }
  //
  // this.rightArrow.addEventListener('click', () => {
  //   this.activeItem.classList.remove('Carousel__item-focused');
  //   moveRight();
  //   this.activeItem.classList.add('Carousel__item-focused');
}
let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

let carouselItems = document.querySelectorAll('.Carousel__item');
carouselItems = Array.from(carouselItems);

let activeItem = document.querySelector('.Carousel__item-focused');
let leftArrow = document.querySelector('.Carousel__arrow-left');
let rightArrow = document.querySelector('.Carousel__arrow-right');

leftArrow.addEventListener('click', () => {
  activeItem.classList.remove('Carousel__item-focused');
  if (carouselItems.indexOf(activeItem) === 0) {
    activeItem = carouselItems[carouselItems.length - 1];
  } else {
    activeItem = carouselItems[carouselItems.indexOf(activeItem) - 1];
  }
  activeItem.classList.add('Carousel__item-focused');
})
rightArrow.addEventListener('click', () => {
  activeItem.classList.remove('Carousel__item-focused');
  if (carouselItems.indexOf(activeItem) === carouselItems.length - 1) {
    activeItem = carouselItems[0];
  } else {
    activeItem = carouselItems[carouselItems.indexOf(activeItem) + 1];
  }
  activeItem.classList.add('Carousel__item-focused');
})
