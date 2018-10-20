class Carousel {
  constructor(element) {
    this.element = element;

    this.left = Array.from(this.element.querySelectorAll('.Carousel__arrow-left'));
    this.right = Array.from(this.element.querySelectorAll('.Carousel__arrow-right'));

    this.items = this.element.querySelectorAll('.Carousel__item');
    this.items = Array.from(this.items).map(item => new CarouselItem(item));

    this.focused = this.element.querySelector('.Carousel__item-focused');

    this.left[0].addEventListener('click', event => {
      this.updateActiveLeft();
    });
    this.right[0].addEventListener('click', event => {
      this.updateActiveRight();
    });
  }

  updateActiveLeft() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.focused === this.items[i].element) {
        this.items[i].deselect();
        if (i === 0) {
          this.items[this.items.length - 1].select();
          this.focused = this.items[this.items.length - 1].element;
          return;
        }
        this.items[i - 1].select();
        this.focused = this.items[i - 1].element;
        return;
      }
    }
  }

  updateActiveRight() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.focused === this.items[i].element) {
        this.items[i].deselect();
        if (i === 2) {
          this.items[0].select();
          this.focused = this.items[0].element;
          return;
        }
        this.items[i + 1].select();
        this.focused = this.items[i + 1].element;
        return;
      }
    }
  }
}

class CarouselItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('Carousel__item-focused');
  }

  deselect() {
    this.element.classList.remove('Carousel__item-focused');
  }
}

// Nodelist of nodes in Carousel class
let carousels = document.querySelectorAll('.Carousel');
// Array of nodelist, passed into map
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
