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
    this.carouselItems = this.element.querySelectorAll(".Carousel__item");
    this.carouselItems = Array.from(this.carouselItems).map((carouselItem) => {  
      return new CarouselItem(carouselItem);
    });
    console.log(this);
    this.activePointer = 0;
    this.activeItem = this.carouselItems[this.activePointer];
    this.element.addEventListener('click', (event) => {
      console.log(event.srcElement.classList);
      if (event.srcElement.classList.contains("Carousel__arrow-left")) {
        if (this.activePointer === 0) this.activePointer = this.carouselItems.length - 1;
        else this.activePointer--;
        let itemToDisplay = this.carouselItems[this.activePointer];
        itemToDisplay.select();
        this.updateActive(itemToDisplay);
      }
      if (event.srcElement.classList.contains("Carousel__arrow-right")) {
        this.activePointer++;
        if (this.activePointer === this.carouselItems.length) this.activePointer = 0;
        let itemToDisplay = this.carouselItems[this.activePointer];
        itemToDisplay.select();
        this.updateActive(itemToDisplay);
      }
    });
  }

  init() {
    this.activeItem.select();
  }

  updateActive(newActiveItem) {
    this.activeItem.deselect();
    this.activeItem = newActiveItem;
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));