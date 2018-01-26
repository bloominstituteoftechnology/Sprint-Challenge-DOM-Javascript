class CarouselItem {
  constructor(element) {
    this.element = element;
  }

  upNext() {
    this.element.classList.add('Carousel__item-focused');
  }

  goAway() {
    this.element.classList.remove('Carousel__item-focused');
  }
}

class Carousel {
  constructor(element) {
    this.element = element;

    this.items = document.querySelectorAll('.Carousel__item');
    this.items = Array.from(this.items).map(item => new CarouselItem(item));
    
    this.arrowLeft = this.element.querySelector('.Carousel__arrow-left');
    this.arrowRight = this.element.querySelector('.Carousel__arrow-right');

    this.arrowLeft.addEventListener('click', () => { // When this works, it will only work for an array of 3 items (I want to adjust this later, once I can get it to work)
      let activeItem = this.currentItem;
      let index = this.items.findIndex((item) => {
        return item === activeItem;
      });
      if (activeItem === this.items[0]) {
        activeItem = this.items[this.items.length-1];
      } else {
        activeItem = this.items[index - 1]
      }
      this.updateActiveItem(activeItem);
      activeItem.upNext();
    });

    this.arrowRight.addEventListener('click', () => { // needs to check the place of activeItem inside the this.items array
      let activeItem = this.currentItem;
      let index = this.items.findIndex((item) => {
        return item === activeItem;
      });
      if (activeItem === this.items[this.items.length - 1]) {
        activeItem = this.items[0];
      } else {
        activeItem = this.items[index + 1];
      }

      this.updateActiveItem(activeItem);
      activeItem.upNext();
    });
    this.currentItem = this.items[0];
    this.initialize();
  }

  initialize() {
    this.currentItem.upNext();
  }

  updateActiveItem(Item) {
    this.currentItem.goAway();
    this.currentItem = Item;
  }

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));