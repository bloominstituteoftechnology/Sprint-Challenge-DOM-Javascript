class Carousel {
  constructor(element) {
    // console.log(element);
    this.element = element;
    this.itemList = Array.from(this.element.querySelectorAll(".Carousel__item"));
    // console.log(this.itemList);
    this.active = this.itemList.shift();
    // console.log(this.active);
  }

  moveLeft() {
    this.active.remove('.Carousel__item-focused');
  }

  moveRight() {

  }

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));