class Carousel {
  constructor(element) {
    this.element = element;

    this.items = element.querySelectorAll(".Carousel__item");
    this.items = Array.from(this.items).map((item) => {
      return new CarouselItem(item);
    })

    this.leftArrow = element.querySelector(".Carousel__arrow-left");
    this.rightArrow = element.querySelector(".Carousel__arrow-right");

    this.leftArrow.addEventListener('click', (event) => {
    })
    this.rightArrow.addEventListener('click', (event) => {
    })

    this.active = element.querySelector(".Carousel__item-focused");
  }
  updateActive(data) {
    if (data === null) return;
  }
}

class CarouselItem {
  constructor(element) {
    this.element = element;
  }

  focus() {
    this.element.classList.add("Carousel__item-focused");
  }
  unfocus() {
    this.element.classList.remove("Carousel__item-focused");
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));