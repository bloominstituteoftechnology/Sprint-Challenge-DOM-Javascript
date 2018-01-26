class Carousel {
  constructor(element) {
    this.element = element;
    this.carItems = element.querySelectorAll(".Carousel__item");
    // this.carItems = Array.from(this.carItems).map((item) => {
    //   return new CarItem(item);
    // });
    this.carItems = Array.from(this.carItems);
    this.activeItemIndex = 0;
    this.activeItem = this.carItems[this.activeItemIndex];
    console.log(this.activeItem);
    console.log(this.carItems);
    this.element.addEventListener('click', (event) => {
      let carArrowLeftClicked = event.target.classList[0] === 'Carousel__arrow-left'; 
      let carArrowRightClicked = event.target.classList[0] === 'Carousel__arrow-right';
      if (carArrowLeftClicked) {
        console.log('Clicked left arrow');
        this.activeItem.classList.remove("Carousel__item-focused");
        if (this.activeItemIndex === 0) this.activeItemIndex = this.carItems.length - 1;
        else { this.activeItemIndex--; }
        console.log(this.activeItemIndex);
        this.activeItem.classList.add("Carousel__item-focused");
      }
      if (carArrowRightClicked) {
        console.log('Clicked right arrow');
        this.activeItem.classList.remove("Carousel__item-focused");
        if (this.activeItemIndex === this.carItems.length - 1) this.activeItemIndex = 0;
        else { this.activeItemIndex++; }
        console.log(this.activeItemIndex);
        this.activeItem.classList.add("Carousel__item-focused");
      }
    })
  }
}

class CarItem {
  constructor(element) {
    this.element = element;
  }

  // select() {
  //   this.element.classList.add("Carousel__item-focused");
  // }

  // deselect() {
  //   this.element.classList.add("Carousel__item-focused");
  // }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));