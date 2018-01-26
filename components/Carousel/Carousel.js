class CarouselItem {
  constructor(element) {
    this.element = element;
  }

  upNext() {
    this.element.classList.add('Carousel__item-focused');
  }

  goAway() {
    this.element.classList.add('Carousel__item-focused');
  }
}

class Carousel {
  constructor(element) {
    this.element = element;

    this.items = element.querySelectorAll('Carousel__item');
    this.items = Array.from(this.items).map(item => new CarouselItem(item));
    console.log(this.items);
  }

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));