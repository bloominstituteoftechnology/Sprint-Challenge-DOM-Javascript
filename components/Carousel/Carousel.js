class Carousel {
  constructor(element) {
    this.element = element;
    this.carItems = element.querySelectorAll(".Carousel__item");
    this.items = Array.from(this.carItems).map((item) => {
      return new CarItem(item);
    });
    // console.log(this.element);
    // console.log(this.carItems);
    this.activeItem = this.carItems[0];
    this.element.addEventListener('click', (event) => {
      // let carArrowLeft = this.element.querySelector(".Carousel__arrow-left");
      // let carArrowRight = this.element.querySelector(".Carousel__arrow-right");
      let carArrowLeftClicked = event.target.classList[0] === 'Carousel__arrow-left'; 
      let carArrowRightClicked = event.target.classList[0] === 'Carousel__arrow-right';
      if (carArrowLeftClicked) console.log('Clicked left arrow');
      if (carArrowRightClicked) console.log('Clicked right arrow');
    })
  }
}

class CarItem {
  constructor(element) {

  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));