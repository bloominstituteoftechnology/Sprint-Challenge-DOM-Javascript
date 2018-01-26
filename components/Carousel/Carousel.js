class CarouselItem {
  constructor(element) {
    this.element = element;
  }

  next() {
    this.element.classList.add("Carousel__item-focused");
  }

  previous() {
    this.element.classList.remove("Carousel__item-focused");
  }
}

class Carousel {
  constructor(element) {
    this.element = element;

    // Get item elements as Array
    this.items = element.querySelectorAll(".Carousel__item");
    this.items = Array.from(this.items).map(item => new Carousel(item));

    // Get left and right arrow elements
    this.arrowLeft = element.querySelector(".Carousel__arrow-left");
    this.arrowRight = element.querySelector(".Carousel__arrow-right");

    // Listens for a click event on left arrow
    this.arrowLeft.addEventListener('click', () => {
      
    });

    // Listens for a click event on right arrow
    this.arrowRight.addEventListener('click', () => {
      
    });
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));