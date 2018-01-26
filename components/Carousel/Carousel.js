class CarouselItem  {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add("Carousel__item-focused");
  }

  deselect() {
    this.element.classList.remove("Carousel__item-focused");
  }

}

class Arrows {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', (event) => {
      event.arrowDirection = this.element.dataset.dir2;
    });
  }

  change(x) {
    if (x == 1) {
      console.log('prev');
      var cItems = document.getElementsByClassName("Carousel__item");
      for (let i = 0; i < cItems.length; i++) {
        if (cItems[i].classList.contains("Carousel__item-focused")) {
          cItems[i].classList.remove("Carousel__item-focused");
          if (i === 0) {
            i = cItems.length - 1;
          } else {
            i--;
          }
          console.log(i)
          cItems[i].classList.add("Carousel__item-focused");
        }
      }
  } else if (x == 2) {
      console.log('next');
      var cItems = document.getElementsByClassName("Carousel__item");
      for (let i = 0; i < cItems.length; i++) {
        if (cItems[i].classList.contains("Carousel__item-focused")) {
          cItems[i].classList.remove("Carousel__item-focused");
          if (i < cItems.length - 1) {
            i++;
          } else {
            i = 0;
          }
          cItems[i].classList.add("Carousel__item-focused");
        }
      }
    }
  }
}

class Carousel {
  constructor(element) {
    this.element = element;

    this.arrows = element.querySelectorAll(".Carousel__arrow-left, .Carousel__arrow-right");
    this.arrows = Array.from(this.arrows).reduce((obj, item) => {
      obj[item.dataset.dir2] = new Arrows(item);
      return obj;
    }, {});

    this.items = element.querySelectorAll(".Carousel__item");
    this.items = Array.from(this.items).reduce((obj, item) => {
      obj[item.dataset.dir] = new CarouselItem(item);
      return obj;
    }, {});

    this.element.addEventListener('click', (event) => {
      if (event.arrowDirection) {
        this.whichWay(event.arrowDirection);
        event.stopPropagation();
      }
    })

    this.activeData = element.querySelector(".Carousel__item-focused");
    this.activeData = this.activeData ? this.activeData.dataset.dir : null;
  }

  whichWay(data) {
    this.arrows[data].change(data);
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
