class CarouselItem {
    constructor(element) {
        this.element = element;
        this.items = Array.from(document.querySelectorAll('.Carousel__item'))

    }
    next() {
        this.items[1].classList.add('Carousel__item-focused');
        this.items[0].classList.remove('Carousel__item-focused');
    }
    prev() {
        this.items[1].classList.remove('Carousel__item-focused');
        this.items[0].classList.add('Carousel__item-focused');
    }
}

class CarouselArrow {
    constructor(element) {
        this.element = element;
        this.leftArrow = new CarouselArrow(this.element.querySelector('.Carousel__arrow-left'));
        this.rightArrow = new CarouselArrow(this.element.querySelector('.Carousel__arrow-right'));    
        this.leftArrow.addEventListner('click', (event) => {
            event.rightArrow = this.element.next();
            event.leftArrow = this.element.prev();
        });
    }
}

class Carousel {
  constructor(element) {
    this.element = element;
    this.leftArrow = new CarouselArrow(this.element.querySelector('.Carousel__arrow-left'));
    this.rightArrow = new CarouselArrow(this.element.querySelector('.Carousel__arrow-right'));
    this.items = element.querySelectorAll(".Carousel__item");
    this.items = Array.from(this.items).reduce((obj, item) => {
        obj[item.querySelector('.Carousel__item')] = new CarouselItem(item);
        return obj;
    }, {});
    this.element.addEventListner('click', (event) => {
        if (carouselItem) {
        this.updateActive(event.carouselItem);
        event.stopPropogation();
      }
    })

    this.activeItem = element.querySelector('.Carousel__item-focused');
    this.activeItem = this.activeItem ? this.activeItem.querySelector('.Carousel__item') : null;
    this.updateActive(this.activeData);
  }

  updateActive(item) {
      if (item === null) return;
      this.leftArrow[this.activeData].prev();
      this.items[this.activeData].prev();

      this.rightArrow[item].next();
      this.items[item].next();
      this.activeItem = item;
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));