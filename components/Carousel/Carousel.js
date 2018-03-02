class CarouselItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('Carousel__item-focused')
  }
  deselect() {
    this.element.classList.remove('Carousel__item-focused');
  }
}

class Carousel {
  constructor(element) {
    this.element = element;
    this.arrowLeft = this.element.querySelector('.Carousel__arrow-left')
    this.arrowLeft.addEventListener('click', () => { this.carousel.updateActive(this) });
    this.arrowRight = this.element.querySelector('.Carousel__arrow-right')    
    this.arrowRight.addEventListener('click', () => { });
    this.items = this.element.getElementsByClassName('.Carousel__item');
    console.log('this.items');
    console.log(this.items);
    
    this.items = Array.from(this.items).map(item => new CarouselItem(item));
    console.log(this.items);
    this.activeItem = this.items[0];
  }

  updateActive(newActive) {
    this.activeItem.deselect();
    this.activeItem = newActive;
    this.activeItem.select();
  }

}

let carousels = document.querySelectorAll(".Carousel");
console.log('carousels');
console.log(carousels);
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
console.log(carousels);
