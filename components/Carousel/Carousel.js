class Carousel {
  constructor(element){
    this.element = element;  // attaches the carousel node to this.element

    this.items = this.element.querySelectorAll(".Carousel__items"); // creates an array of nodes which are items in the carousel from the dom
    this.items =  Array.from(this.items).reduce((obj, item) => {  // reformats the nodes/items into workable elements in an array
      obj[item.dataset.cItem] = new Items(item);
      return obj;
    }, {});
    console.log(this.items);

    this.activeItem = this.items[0];
    this.arrow = this.element.querySelectorAll(".Carousel__arrow"); // gathers our arrows
    this.arrow = Array.from(this.arrow).reduce((obj, arrow) => { // makes arrows DOM node array into workable JS element array
      obj[arrow.dataset.arrow] = new Arrow(arrow);
      return obj;
    }, {});
  }
  activateItem(item){
    this.activeItem.classList.remove("Carousel__item-focused")
    item.classList.add("Carousel__item-focused");
    return;
  }
  spinLeft(event){
    
  }
}

class Items {
  constructor(element) {
    this.element = element;

    this
  }
}

class Arrow {
  constructor(element) {

  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));