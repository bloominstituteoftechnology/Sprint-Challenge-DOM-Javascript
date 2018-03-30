class Carousel {
  constructor(element){
    this.element = element;
    const items = Array.from(document.querySelectorAll('.Carousel__item'));
    this.items = items.map(item => new CarouselItem(item));
    let leftArrow = document.querySelector('.Carousel__arrow-left');
    leftArrow = new Arrow(leftArrow, this, -1);
    this.selectedItem = 0;
  }

  hidePrevious(direction){
    for(let i = 0; i < this.items.length; i++) {
      if(this.items[i].itemNum === (this.selectedItem + 1).toString()) {
        this.items[i].hide();
        this.selectedItem = (this.selectedItem + direction) % 3;
        if(this.selectedItem < 0) this.selectedItem = 2;
      }
    }
    this.showNext();
  }

  showNext(){
    for(let i = 0; i < this.items.length; i++) {
      if(this.items[i].itemNum === (this.selectedItem + 1).toString()) {
        this.items[i].show();
      }
    }
  }
}

class CarouselItem {
  constructor(element){
    this.element = element;
    this.itemNum = element.dataset.item;
  }

  show(){
    this.element.classList.add('Carousel__item-focused');
  }

  hide(){
    this.element.classList.remove('Carousel__item-focused');
  }
}

class Arrow {
  constructor(element, carousel, direction){
    this.element = element;
    this.carousel = carousel;
    this.direction = direction;
    this.element.addEventListener('click', (event) => {
      this.carousel.hidePrevious(this.direction);
    });
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
