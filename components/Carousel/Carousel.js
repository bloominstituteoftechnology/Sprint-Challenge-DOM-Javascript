class Carousel {
  constructor(element) {
    this.element = element;
    this.carItems = element.querySelectorAll(".Carousel__item");
    this.items = Array.from(this.carItems).map((item) => {
      return new CarItem(item);
    });
    this.activeItemIndex = 0;
    this.activeItem = this.carItems[0];
    this.element.addEventListener('click', (event) => {
      let carArrowLeftClicked = event.target.classList[0] === 'Carousel__arrow-left'; 
      let carArrowRightClicked = event.target.classList[0] === 'Carousel__arrow-right';
      if (carArrowLeftClicked) {
        console.log('Clicked left arrow');
        if (this.activeItemIndex === 0) this.activeItemIndex = this.carItems.length - 1;
        else { this.activeItemIndex--; }
        console.log(this.activeItemIndex);
      }
      if (carArrowRightClicked) {
        console.log('Clicked right arrow');
        if (this.activeItemIndex === this.carItems.length - 1) this.activeItemIndex = 0;
        else { this.activeItemIndex++; }
        console.log(this.activeItemIndex);
      }
    })
  }
}

class CarItem {
  constructor(element) {
    this.element = element;
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));