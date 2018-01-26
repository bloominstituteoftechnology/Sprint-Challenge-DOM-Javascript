class Carousel {
  constructor(element) {
    this.element = element;
    this.slides = element.querySelectorAll(".Carousel__item");
    this.total = this.slides.length;
    this.activeLink = this.slides[0];
    console.log(this.slides);
  }
  next() {
    this.rightArrow = element.querySelector(".Carousel__arrow-right");
  }
  prev() {
    this.leftArrow = element.querySelector(".Carousel__arrow-left");
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
