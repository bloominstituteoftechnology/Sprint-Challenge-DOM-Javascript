class CarouselItem {
  constructor(element) {
    this.element = element
  }
  
  show(data) {
    
  }
}

class CarouselArrow {
  constructor(element) {
    this.element = element;
    this.parent = carousels;
    this.direction = this.element.dataset.arrow;
    this.element.addEventListener('click', () => {
      if(this.direction === 'left') {
        console.log('going left');
      } else if(this.direction === 'right') {
        console.log(this.parent);
      }
    });
  }
  
//  clicked() {
//    console.log(this.dataset.arrow);
//    if(this.dataset.arrow === 'left') {
//      console.log('going left');
//    } else if(this.dataset.arrow === 'right') {
//      console.log(this.parent);
//    }
//  }
}

class Carousel {
  constructor(element) {
    this.element = element;
    this.items = document.querySelectorAll('.Carousel__item')
    this.items = Array.from(this.items).map((item) => {return new CarouselItem(item)});
    this.arrowLeft = document.querySelector('.Carousel__arrow-left');
    this.arrowLeft = new CarouselArrow(this.arrowLeft);
    this.arrowRight = document.querySelector('.Carousel__arrow-right');
    this.arrowRight = new CarouselArrow(this.arrowRight);
    this.currentActive = 0;
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));