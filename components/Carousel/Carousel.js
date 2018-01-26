// my mind is melting

class Carousel {
  constructor(element) {
    this.element = element;
    this.classList = element.classList;
  }

  select() {
    this.classList.add('Carousel__item-focused');
  }

  deselect() {
    this.classList.remove('Carousel__item-focused');
  }
}

class Arrows {
  constructor(element) {
    this.element = element;

    }
  }






let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));