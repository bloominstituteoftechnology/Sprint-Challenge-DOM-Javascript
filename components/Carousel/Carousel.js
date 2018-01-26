class Arrows {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', (event) => {
      event.arrowDirection = this.element.dataset.dir2;
    });
  }

  select() {
    console.log('sel');
  }

  deselect() {
    console.log('del');
  }
}

class Carousel {
  constructor(element) {
    this.element = element;

    this.items = element.querySelectorAll(".Carousel__item");
    this.items = Array.from(this.items).reduce((obj, item) => {
      obj[item.dataset.dir] = new Arrows(item);
      return obj;
    }, {});

    this.element.addEventListener('click', (event) => {
      if (event.arrowDirection) {
      console.log('click')
       this.whichWay(event.arrowDirection);
       event.stopPropagation();
      }
    })

    this.activeData = element.querySelector(".Carousel__item-focused");
    this.activeData = this.activeData ? this.activeData.dataset.dir : null;
    this.whichWay(this.activeData);
  }

  whichWay(data) {
    if (data === null) return;
    this.items[this.activeData].deselect();
    this.items[data].select();
    this.activeData = data;
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
