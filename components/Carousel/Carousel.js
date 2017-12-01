class Carousel {
  constructor(elment) {
    this.element = element;
    this.carouselItems = element.querySelectorAll('.Carousel__items');
    this.carouselItems = Array.from(this.carouselItems).map((item) => {
      return new CarouselItem(item, this);
    });
    this.current = this.carouselItems[0];
    
    let count = 0;
    const amount = this.carouselItems.length;
  }

  navigate(direction) {
    this.current.classList.remove('Carousel__item-focused');
    this.counter += direction;
    if (direction === -1 && counter < 0) {
      counter = amount - 1;
    }
    if (direction === 1 && counter > amount) {
      counter = 0;
    }
    this.current = items[current];
    current.classList.add('Carousel__item-focused');
  }
  
}

class CarouselItem {
  constructor(element, parent) {
    this.element = element;
    this.carousel = parent;

    this.element.addEventListener('click')
  }

  
}

let carousels = document.querySelectorAll('.Carousel');
console.log(carousels);
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
