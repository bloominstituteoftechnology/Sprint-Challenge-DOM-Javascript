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

class Carousel {
  constructor(element) {
    this.element = element;
    this.arrowLeft = element.querySelector(".Carousel__arrow-left");
    this.arrowRight = element.querySelector(".Carousel__arrow-right");
    this.carouselItems = element.querySelector(".Carousel__items");
    this.arrowLeft.addEventListener("click", () => {
      const index = Array.from(this.carouselItems.children).indexOf(this.activeItem.element);
      let newItem = this.getItem(((index + 2) % 3) + 1);
      newItem = new CarouselItem(newItem);
      this.updateActive(newItem);
      newItem.select()
    });
    this.arrowRight.addEventListener("click", () => {
      const index = Array.from(this.carouselItems.children).indexOf(this.activeItem.element);
      let newItem = this.getItem(((index + 1) % 3) + 1);
      newItem = new CarouselItem(newItem);
      this.updateActive(newItem);
      newItem.select()
    });
    this.activeItem = this.getItem(1);
    this.activeItem = new CarouselItem(this.activeItem);
    this.init();
  }

  updateActive(newActive) {
    this.activeItem.deselect();
    this.activeItem = newActive;
  }

  init() {
    this.activeItem.select()
  }

  getItem(index) {
    return this.element.querySelector(`.Carousel__item:nth-child(${index})`);
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
