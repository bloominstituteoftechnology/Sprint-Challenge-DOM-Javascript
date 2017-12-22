class Carousel {
  constructor(element) {
    this.element = element;
    this.itemList = Array.from(this.element.querySelectorAll(".Carousel__item"));
    this.active = this.itemList[0];
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
console.log(carousels);