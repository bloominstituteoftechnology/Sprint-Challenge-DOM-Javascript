class CarouselItem {

  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('Carousel__item-focused');
  }

  deselect() {
    this.element.classList.remove('Carousel__item-focused');
  }

}

class Carousel {

  constructor(element) {
    this.element = element;
    this.items = element.querySelectorAll('.Carousel__item');
    this.items = Array.from(this.items);
    this.numItems = this.items.length;
    this.count = 1;
    this.carItems = this.items.map(val => new CarouselItem(val));

    document.querySelector('.Carousel__arrow-right').addEventListener('click', () => {
      console.log('clicked right');
      this.count += 1;
      console.log(this.count);
      this.updateActive(this.count);
    });
    document.querySelector('.Carousel__arrow-left').addEventListener('click', () => {
      console.log('clicked left');
      this.count -= 1;
      this.updateActive(this.count);
    });

    this.activeItem = this.items[0];
    this.init();
 }

  init() {
    (this.carItems.find((val) => val.element.dataset.car === this.activeItem.dataset.car)).select();
  }

  updateActive(count) {
    (this.carItems.find((val) => val.element.dataset.car === this.activeItem.dataset.car)).deselect();
    (this.carItems.find((val) => val.element.dataset.car === count.toString())).select();
    this.activeItem = this.items.find((val) => val.dataset.car === count.toString());
  }

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));