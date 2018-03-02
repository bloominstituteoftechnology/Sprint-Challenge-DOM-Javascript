class CarouselItem {
  constructor(element) {
    this.element = element;
  };
  select() {
    this.element.classList.add("Carousel__item-focused");
  }

  deselect() {
    this.element.classList.remove("Carousel__item-focused");
  }
}

class CarouselItems {
  constructor(element, parent) {
    this.element = element;
    this.items = element.querySelectorAll(".Carousel__item");
    this.items = Array.from(this.items).map((item) => {
      return new CarouselItem(item);
    })
    this.activeItem = this.items[0];
  };

  updateActiveItem(newActive) {
    if (newActive !== null) {
      this.activeItem.deselect();
      this.activeItem = newActive;
      this.activeItem.select();
    }
  }
}

class CarouselArrowRight {
  constructor(element, parent) {
    this.element = element;
    this.parent = parent;
    // add event listener to change content on click
    // this.element.addEventListener('click', () => {
    //   this.parent.carouselItems.updateActiveItem(activeItem.nextElementSibling);
    // });
  };
}

class CarouselArrowLeft {
 constructor(element, parent) {
   this.element = element;
   this.parent = parent;
   //add event listener to change content on click
   // this.element.addEventListener('click', () => {    this.parent.carouselItems.updateActiveItem(activeItem.previousElementSibling);
   // });
  };
}

class Carousel {
  constructor(element) {
  this.element = element;

  // attach carouselItems
  this.carouselItems = element.querySelector('.Carousel__items');
  this.carouselItems = new CarouselItems(this.carouselItems, this);

  // attach arrows
  this.leftArrow = element.querySelector('.Carousel__arrow-left');
  this.leftArrow = new CarouselArrowLeft(this.leftArrow, this);
  this.rightArrow = element.querySelector('.Carousel__arrow-right');
  this.rightArrow = new CarouselArrowRight(this.rightArrow, this);


  // initialize carousel to first item
  };
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
console.log(carousels);
