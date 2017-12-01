class Carousel {
  constructor(element) {
    this.element = element;
    this.index = 0;
    this.movingRight = element.querySelector('.Carousel__arrow-right');
    this.movingLeft = element.querySelector('.Carousel__arrow-left');
    this.carouselItems = Array.from(this.element.querySelectorAll(".Carousel__item"));
  }

  // select and deselect might not be necessary in a refactor
  // since I'm tryinf to implement in move functions.
  select() {
    this.element.classList.add('Carousel__item-focused');
  }

  deselect() {
    this.element.classList.remove('Carousel__item-focused');
  }

  moveRight() {
    if (this.element !== this.element.length - 1) {
      this.carouselItems[this.index].classList.remove('Carousel__item-focused');
      // ++ because we are moving right on index
      this.carouselItems[++this.index].classList.add('Carousel__item-focused');
  }

  //event of moving, maybe in its own function later?
  this.movingRight.addEventListener('click', () => {
    this.moveRight();
  });

  moveLeft() {
    if (this.index !== 0) {
      this.carouselItems[this.index].classList.remove('Carousel__item-focused');
      // -- because we are moveing left on index
      this.carouselItems[--this.index].classList.add('Carousel__item-focused');
    }
  }
  
  // Again should really be in its own function I think
  this.movingLeft.addEventListener('click', () => {
    this.moveLeft();
  });

  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));