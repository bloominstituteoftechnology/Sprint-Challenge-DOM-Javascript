class Carousel {
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
  
  class TabLink {
    constructor(element) {
      this.element = element;
      this.element.addEventListener('click', (event) => {
        event.tabData = this.element.dataset.tab;
      });
    }
  
    select() {
      this.element.classList.add("Tabs__link--selected");
    }
  
    deselect() {
      this.element.classList.remove("Tabs__link--selected");
    }
  }
  
  class Tabs {
    constructor(element) {
      this.element = element;
  
      // Attaches links with data-tab value as property
      this.links = element.querySelectorAll(".Tabs__link");
      this.links = Array.from(this.links).reduce((obj, link) => {
        obj[link.dataset.tab] = new TabLink(link);
        return obj;
      }, {});
  
      // Attaches items with data-tab value as property
      this.items = element.querySelectorAll(".Tabs__item");
      this.items = Array.from(this.items).reduce((obj, item) => {
        obj[item.dataset.tab] = new TabItem(item);
        return obj;
      }, {});
  
      // Listens for a click event in its children or self
      this.element.addEventListener('click', (event) => {
        if (event.tabData) {
         this.updateActive(event.tabData);
         event.stopPropagation(); 
        }
      })
  
      this.activeData = element.querySelector(".Tabs__default");
      this.activeData = this.activeData ? this.activeData.dataset.tab : null;
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

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));