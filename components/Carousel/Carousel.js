class Carousel {
  constructor(element) {
    this.element = element;
    this.carItems = element.querySelectorAll(".Carousel__item");
    this.carArrowLeft = element.querySelectorAll(".Carousel__arrow-left");
    this.carArrowRight = element.querySelectorAll(".Carousel__arrow-right");
    this.items = Array.from(this.carItems).map((item) => {
      return new CarItem(item);
    });
    console.log(this.element);
    console.log(this.carItems);
    console.log(this.ArrowLeft);
    console.log(this.ArrowRight);
    this.activeItem = this.carItems[0];
  }
}

class carItem {
  constructor(element) {

  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));