

class Carousel {
  constructor(element) {
    this.element = element;
    this.image = element.querySelectorAll(".Carousel__item");
    this.activeImage = this.image[0];
    this.activeImageCount = 0;
    this.left = element.querySelectorAll(".Carousel__arrow-left");
    this.right = element.querySelectorAll(".Carousel__arrow-right");

    this.left.addEvent('click', (event) => {
      this.

  })
    this.right.addEvent('click', (event) => {
      this.
})

  }


  rightArrow() {

  }
  leftArrow() {

  }
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



updateActive(newActive){
  this.activeImage.deselect();
  this.activeImage = newActive;
  this.activeImage.select();
}
let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));