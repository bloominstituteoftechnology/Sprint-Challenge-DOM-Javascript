// Pseudo Code:
// So I think you need to have three classes, Carousel, CarouselLink, and CarouselItem.
// The Carousel is a little different than the tabs, since the Link Buttons are actually
// the arrows.  So there will need to be an event listener on each of the arrows, and the
// results of clicking on the right arrow, will shuffle through the "Box" class elements 
// in an incremental loop (123123123), versus clicking on the left arrow, will shuffle through
// the "Box" class elements in a decremental loop (e.g. 321321321).

// SPRINT CODE:

class CarouselItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add("Carousel__item--focused");
  }

  deselect() {
    this.element.classList.remove("Carousel__item--focused");
  }
}

class CarouselLink {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', (event) => {
      event.slideData = this.element.dataset.slide;
    });
  }

  select() {
    this.element.classList.add("Carousel__link--focused");
  }

  deselect() {
    this.element.classList.remove("Carousel__link--focused");
  }
}

class Carousel {
  constructor(element) {
    this.element = element;

    // Attaches links with data-slide value as property
    // When you click on Tab 1, 
    this.links = element.querySelectorAll(".Carousel__link");
    this.links = Array.from(this.links).reduce((obj, link) => {
      obj[link.dataset.slide] = new CarouselLink(link);
      return obj;
    }, {});

    // Attaches items with data-slide value as property
    this.items = element.querySelectorAll(".Carousel__item");
    this.items = Array.from(this.items).reduce((obj, item) => {
      obj[item.dataset.slide] = new CarouselItem(item);
      return obj;
    }, {});

    // Listens for a click event in its children or self
    this.element.addEventListener('click', (event) => {
      if (event.slideData) {
       this.updateActive(event.slideData);
       event.stopPropagation(); 
      }
    })

    // Sets Tab 1 (which has the Tabs__default class) to display its items by default
    this.activeData = element.querySelector(".Carousel__default");
    this.activeData = this.activeData ? this.activeData.dataset.slide : null;
    this.updateActive(this.activeData);
  }

  updateActive(data) {
    if (data === null) return;
    this.links[this.activeData].deselect();
    this.items[this.activeData].deselect();

    this.links[data].select();
    this.items[data].select();
    this.activeData = data;
  }
}

let carousels = document.querySelectorAll(".Carousels");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
