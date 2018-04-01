class Carousel {
  constructor(element) {
    this.element = element;
    this.buttonLeft = new CarouselButtonLeft(this.element.children[0], this);
    this.buttonRight = new CarouselButtonRight(this.element.children[2], this);
    this.itemList = document.querySelector('.Carousel__items');
    this.activeItem = this.itemList.firstElementChild;
  }
}
class CarouselButton {
  constructor(element, parent) {
    this.element = element;
    this.parent = parent;
    this.element.addEventListener('click', () => {
      this.click();
    });
  }
  click() {
    console.log('error');
  }
}
class CarouselButtonLeft extends(CarouselButton){
  constructor(element, parent) {
    super(element, parent);
  }
  click() {
    if (this.parent.itemList.firstElementChild === this.parent.activeItem) {
      this.parent.activeItem.classList.remove('Carousel__item-focused');
      this.parent.activeItem = this.parent.itemList.lastElementChild;
      this.parent.activeItem.classList.add('Carousel__item-focused');
    } else {
      this.parent.activeItem.classList.remove('Carousel__item-focused');
      this.parent.activeItem = this.parent.activeItem.previousElementSibling;
      this.parent.activeItem.classList.add('Carousel__item-focused');
    }
  }
}
class CarouselButtonRight extends(CarouselButton){
  constructor(element, parent) {
    super(element, parent);
  }
  click() {
    if (Array.from(this.parent.itemList.children).indexOf(this.parent.activeItem) < Array.from(this.parent.itemList.children).length - 1) {
      this.parent.activeItem.classList.remove('Carousel__item-focused');
      this.parent.activeItem = this.parent.activeItem.nextElementSibling;
      this.parent.activeItem.classList.add('Carousel__item-focused');
    } else {
      this.parent.activeItem.classList.remove('Carousel__item-focused');
      this.parent.activeItem = this.parent.itemList.firstElementChild;
      this.parent.activeItem.classList.add('Carousel__item-focused');
    }
  }
}

let carousels = document.querySelectorAll(".Carousel");
for (let i = 0; i < carousels.length; i++) {
  carousels[i] = new Carousel(carousels[i]);
}
