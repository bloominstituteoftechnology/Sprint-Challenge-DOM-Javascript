class Carousel {
  constructor(element) {
    this.element = element;
    this.buttonLeft = this.element.children[0];
    this.buttonRight = this.element.children[2];
    this.itemList = document.querySelectorAll('.Carousel__item');
    this.activeItem = this.itemList[i];
    this.element.addEventListener('click', (event) => {
      if (event.target === this.buttonRight) {
        this.activeItem.classList.remove('Carousel__item-focused');
        i += 1;
        
      }
    });
  }
}
let i = 0;
let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
