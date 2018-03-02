class CarouselItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('')
  }
}

class Carousel {
  constructor(element) {
    this.element = element;
    this.element.querySelector('.Carousel__arrow-left').addEventListener('click', () => { slideLeft() });
    this.element.querySelector('.Carousel__arrow-right').addEventListener('click', () => { slideRight() });    
    this.items = this.element.querySelectorAll('Boxe');
    this.items = Array.from(this.items).map(item => new CarouselItem(item));
    this.activeitem = this.items[0];
  }

}

let carousels = document.querySelectorAll(".Carousel");
console.log(carousels);
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
console.log(carousels);
