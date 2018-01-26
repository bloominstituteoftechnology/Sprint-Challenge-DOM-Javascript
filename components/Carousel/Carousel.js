class CarouselItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add("Carousel__item-focused");
  }

  deselect() {
    this.element.classList.remove("Carousel__item-focused");
  }
}

class CarouselArrow {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', (event) => {
      event.tabData = this.element.dataset.tab;
    });
  }

  select() {
    this.element.classList.add("");
  }

  deselect() {
    this.element.classList.remove("");
  }
}

class Carousel {
  constructor(element) {
    this.element = element;
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));