class CarouselItem {
  constructor(element) {
    this.element = element;
  }

  toggleFocus() {
    this.element.classList.toggle('Carousel__item-focused')
  }
}

class Carousel {
  constructor(element) {
    this.element = element;
    this.arrowLeft = this.element.querySelector('.Carousel__arrow-left');
    this.arrowLeft.addEventListener('click', () => { this.switchLeft() });
    this.arrowRight = this.element.querySelector('.Carousel__arrow-right'); 
    console.log(this.arrowRight);
    this.arrowRight.addEventListener('click', () => { this.switchRight() });
    this.items = element.getElementsByClassName('Carousel__item');
    

    console.log('this.items');
    console.log(this.items);
    
    this.items = Array.from(this.items).map(item => new CarouselItem(item));
    console.log(this.items);
    this.items.unshift(this.items.pop());
    this.focusIndex = Math.ceil((this.items.length / 2) - 1);
    console.log(`index ${this.focusIndex} ${this.items.length}`);
  }

  switchRight() {
    this.items[this.focusIndex].toggleFocus();
    this.items.push(this.items.shift());
    this.items[this.focusIndex].toggleFocus();
  }

  switchLeft() {
    this.items[this.focusIndex].toggleFocus();
    this.items.unshift(this.items.pop());
    this.items[this.focusIndex].toggleFocus();
  }

}

let carousels = document.querySelectorAll(".Carousel");
console.log('carousels');
console.log(carousels);
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
console.log(carousels);
