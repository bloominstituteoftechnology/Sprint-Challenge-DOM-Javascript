class Carousel {
  constructor(element) {
    this.element = element;
    this.items = element.querySelectorAll('.Carousel__item');
    this.activeItem = this.items[0];
    this.activeIdx = 0;

    // arrows
    this.left = element.querySelector('.Carousel__arrow-left');
    this.right = element.querySelector('.Carousel__arrow-right');

    //event listeners
    this.left.addEventListener('click', (event) => {
      this.updateActive('left');
    });
    this.right.addEventListener('click', (event) => {
      this.updateActive('right');
    });
  }

  select() {
    this.ativeItem.classlist.add('.Carousel__item-focused');
  }
  deselect() {
    this.activeItem.classlist.remove('.Carousel__item-focused');
  }

  updateActive(arrowDir) {
    if (arrowDir === null) return;

    this.deselect();

    if (arrowDir === "left") {
       this.activeIdx === 0 ? this.activeIdx = this.items.length - 1:this.activeIdx--;
    } else if (arrowDir === "right") {
      this.activeIdx === this.items.length - 1 ? this.activeIdx = 0:this.activeIdx++;
    }
    this.activeItem = this.items[this.activeIdx];
    this.select();
  }
}

let Carousels = document.querySelectorAll('.Carousel');
Carousels = Array.from(Carousels).map(carousel => new Carousel(carousel);
