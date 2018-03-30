class CarouselItem {
  constructor(element) {
    this.element = element;
  }

  stage(side) {
    this.element.classList.remove('Carousel__item--focused');
    if (side == "left") {      
      this.element.classList.add('Carousel__item--hidden-left');
    } else {
      this.element.classList.add('Carousel__item--hidden-right');
    }
  }

  slideIn() {
    this.element.classList.remove('Carousel__item--hidden-left');
    this.element.classList.remove('Carousel__item--hidden-right');
    this.element.classList.add('Carousel__item--focused');
  }
}

class Carousel {
  constructor(element) {
    this.element = element;
    this.items = Array.from(document.querySelectorAll('.Carousel__item'))
      .map((item) => new CarouselItem(item));
    this.leftArrow = document.querySelector('.Carousel__arrow-left');
    this.rightArrow = document.querySelector('.Carousel__arrow-right');
    this.currentItemIndex = 0;
    this.init();
  }

  init() {
    this.leftArrow.addEventListener('click', this.scrollLeft.bind(this));
    this.rightArrow.addEventListener('click', this.scrollRight.bind(this));

    // Fixed positioning of carousel elements requires programmatically setting container height
    this.element.style.height = this.items.reduce((tallest, item) => {
      if (item.element.clientHeight > tallest) {
        return item.element.clientHeight;
      }
      return tallest;
    }, 0) + "px";
  }

  scrollLeft() {
    this.currentItemIndex = Math.max(this.currentItemIndex - 1, 0);
    this.update();
  }

  scrollRight() {
    this.currentItemIndex = Math.min(this.currentItemIndex + 1, this.items.length - 1);
    this.update();
  }

  update() {
    console.log(this.currentItemIndex);
    this.items.forEach((item, index) => {
      if (index < this.currentItemIndex) {
        item.stage("left");
      }
      if (index > this.currentItemIndex) {
        item.stage("right");
      }
      if (index == this.currentItemIndex) {
        item.slideIn();
      }
    })
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));