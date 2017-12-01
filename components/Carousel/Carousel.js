class CarouselItem {
  // turn each carousel item into an object with a focus and unfocus methods
  constructor(element) {
    this.element = element;
  }
  focus() {
    this.element.classList.add('Carousel__item--focused');
  }

  unfocus() {
    this.element.classList.remove('Carousel__item--focused');
  }
}
class Carousel {
  constructor(element) {
    // get a carousel
    this.element = element;
    // place all carousel items in an arr/objects
    this.items = element.querySelectorAll('.Carousel__item');
    console.log(this.items);
    // get left and right arrows
    this.focusedItem = element.getElementsByClassName(
      'Carousel__item--focused'
    );
    this.leftArrow = element.getElementsByClassName('Carousel__arrow--left');
    this.rightArrow = element.getElementsByClassName('Carousel__arrow--right');

    // listen for left arrow click
    this.leftArrow.addEventListener('click', event => {
      // if (focusedItem !== this.items[0]) {
      // add .Carousel__item--focused to this.items[i - 1],
      // remove .Carousel__item--focused to this.items[i]
      // focusedItem = this.item
      if (0 === 0) {
        console.log('ToDo');
      }
    });
    // listen for right arrow click
    this.rightArrow.addEventListener('click', event => {
      // if (focusedItem !== this.items.length - 1) {
      // add .Carousel__item--focused to this.items[i + 1],
      // remove .Carousel__item--focused to this.items[i]
      if (0 === 0) {
        console.log('ToDo');
      }
    });
  }
}

let carousels = document.querySelectorAll('.Carousel');
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
