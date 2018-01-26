class CarouselItem {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', (event) => {
      event.itemData = this.element.dataset.tab; // <--- change this
    }); 
  }

  select() {
    this.element.classList.add("Carousel__item-focused");
  }

  deselct() {
    this.element.classList.remove("Carousel__item-focused");
  }
}

class Carousel {
  constructor(element) {
    this.element = element;
    
    // Since we don't need something like Tabs_link cos we don't have a list..
    // ..we can just invoke CarouselItem here
    this.items = element.querySelectorAll(".Carousel_item")
    this.items = Array.from(this.items).reduce((obj, item) => {
      obj[item] = new CarouselItem(item);
      return obj;
    }, {});

    //listen for click event here
    this.element.addEventListener('click', (event) => {
      if (event.tabData) { // <--- change tabData
        this.updateActive(event.tabData);
        evenet.stopPropagation();
      }
    })

    this.activeData = element.querySelector(".Tabs_default");
    this.activeData = this.activeData ? this.activeData.dataset.tab : null;
    this.updateActive(this.activeData);
  }

  updateActive(data) {
    if (data === null) return;
    this.items[this.activeData].deselect();
    this.items[data].select();
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));