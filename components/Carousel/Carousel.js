class CarouselItem {
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

class nextLink {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', (event) => {
      event.prev = this.element.items[-1];
    });
  }
}

class prevLink {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', (event) => {
      event.next = this.element.items[+1];
    });
  }
}

class Carousel {
  constructor(element) {
    this.element = element;

    this.linkNext = element.querySelector(".Carousel__arrow-right");
    this.linkNext = new nextLink()
    this.linkPrev = element.querySelector(".Carousel__arrow-left");
    this.linkPrev = new prevLink()

    this.items = element.querySelectorAll(".Carousel__item");
    this.items = Array.from(this.items).reduce((obj, item) => {
      obj[item.dataset.tab] = new CarouselItem(item);
      return obj;
    }, []);


    this.activeData = element.querySelector(".Tabs__item-focused");

  }
  select() {
    this.element.classList.add("Carousel__item-focused");
  }

  deselect() {
    this.element.classList.remove("Carousel__item-focused");
  }
}




let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
