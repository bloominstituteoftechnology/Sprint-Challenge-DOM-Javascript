class CarouselItem {
  constructor(element) {
    this.element = element;
  }

  upNext() {
    this.element.classList.add('Carousel__item-focused');
  }

  goAway() {
    this.element.classList.add('Carousel__item-focused');
  }
}

class Carousel {
  constructor(element) {
    this.element = element;

    this.items = document.querySelectorAll('.Carousel__item');
    console.log('here are items:', this.items);
    this.items = Array.from(this.items).map(item => new CarouselItem(item));
    
    this.arrowLeft = this.element.querySelector('.Carousel__arrow-left');
    console.log('this is arrow left', this.arrowLeft);
    this.arrowRight = this.element.querySelector('.Carousel__arrow-right');

    this.currentItem = this.items[0];

    this.arrowLeft.addEventListener('click', () => { // When this works, it will only work for an array of 3 items (I want to adjust this later, once I can get it to work)
      let activeItem = this.currentItem;
      if (activeItem = this.items[0]) {activeItem = this.items[2]}
      else if (activeItem = this.items[1]) {activeItem = this.items[0]}
      else if (activeItem = this.items[2]) {activeItem = this.items[1]};
      this.updateActiveItem(activeItem);
      activeItem.UpNext();
    });

    this.arrowRight.addEventListener('click', () => {
      let activeItem = this.currentItem;
      if (activeItem = this.items[0]) {activeItem = this.items[1]}
      else if (activeItem = this.items[1]) {activeItem = this.items[2]}
      else if (activeItem = this.items[2]) {activeItem = this.items[0]};
      this.updateActiveItem(activeItem);
      activeItem.UpNext();
    });

    initialize();
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