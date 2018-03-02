class Carousel {
  constructor(element) {
    this.element = element;
    this.element.querySelector('.Carousel__arrow-left').addEventListener('click', () => { slideLeft() });
    this.element.querySelector('.Carousel__arrow-right').addEventListener('click', () => { slideRight() });    
    
  }

}

let carousels = document.querySelectorAll(".Carousel");
console.log(carousels);
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
console.log(carousels);
