class Carousel {
  constructor(element){
    this.element = element;  
    this.items = this.element.querySelectorAll(".Carousel__item");
    // console.log(this.items);
    this.items = Array.from(this.items).map(item => {
      return new Items(item);
    });
    // console.log(this.items);
    this.current = this.items[0]; // remembers current
    this.init();
    this.addListener();
  }

  init(){
    return this.items[0].classList.add("Carousel__item-focused"); // sets Box 1 visible on initilization
  }
  addListener(){
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("Carousel__arrow-right") || event.target.classList.contains("Carousel__arrow-left")) return this.shift(this.items, event, this.current);
    });
  }

  shift(items, event, currentItem){
    if (currentItem === items[0]) { // Shift from Box 1
      if (event.target.classList.contains("Carousel__arrow-right")) {
        items[0].classList.remove("Carousel__item-focused");
        items[1].classList.add("Carousel__item-focused");
        return updateCurrent(items[1]);
      }
      if (event.target.classList.contains("Carousel__arrow-left")) {
        items[0].classList.remove("Carousel__item-focused");
        items[2].classList.add("Carousel__item-focused");
        return updateCurrent(items[2]);
      }
    }
    if (currentItem === items[1]) { // Shift from Box 2
      if (event.target.classList.contains("Carousel__arrow-right")) {
        items[1].classList.remove("Carousel__item-focused");
        items[2].classList.add("Carousel__item-focused");
        return updateCurrent(items[2]);
      }
      if (event.target.classList.contains("Carousel__arrow-left")) {
        items[1].classList.remove("Carousel__item-focused");
        items[0].classList.add("Carousel__item-focused");
        return updateCurrent(items[0]);
      }
    }
    if (currentItem === items[2]) { // Shift from Box 3
      if (event.target.classList.contains("Carousel__arrow-right")) {
        items[2].classList.remove("Carousel__item-focused");
        items[0].classList.add("Carousel__item-focused");
        return updateCurrent(items[0]);
      }
      if (event.target.classList.contains("Carousel__arrow-left")) {
        items[2].classList.remove("Carousel__item-focused");
        items[1].classList.add("Carousel__item-focused");
        return updateCurrent(items[1]);
      }
    }
  }
  updateCurrent(current){
    this.current = current;
  }
}

class Items {
  constructor(item) {
    this.item = item;
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));