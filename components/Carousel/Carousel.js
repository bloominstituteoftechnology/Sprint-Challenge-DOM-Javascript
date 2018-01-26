class CarouselItem {
  constructor(element) {
    this.element = element;
  }
}

class CarouselArrow {
  constructor(element) {
    this.element = element;
  }
}

class Carousel {
  constructor(element) {
    this.element = element;
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));