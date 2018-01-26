class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    // creates an array of carousel items
    this.items = this.carousel.querySelectorAll(".Carousel__item");
    this.items = Array.from(this.items).map((item) => {
      return new CarouselItem(item);
    })
    this.focusedItem = this.items[0];
    this.addListener();
  }
  addListener() {
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("Carousel__arrow-right")) {
        const next = this.getNext();
        this.updateFocused(next);
      } else if (event.target.classList.contains("Carousel__arrow-left")) {
        const previous = this.getPrevious();
        this.updateFocused(previous);
      }
    })
  }
  updateFocused(newFocused) {
    this.focusedItem.deselect();
    this.focusedItem = newFocused;
    this.focusedItem.select();
  }
  getNext() {
    let num = this.focusedItem.num;
    let next;
    if (num === this.items.length.toString()) next = this.items[0];
    else {
      num++;
      this.items.forEach((item) => {
        if (item.num === num.toString()) {
          next = item;
        }
      })
    }
    return next;
  }
  getPrevious() {
    let num = this.focusedItem.num;
    let previous;
    if (num === "1") previous = this.items[this.items.length - 1];
    else {
      num--;
      this.items.forEach((item) => {
        if (item.num === num.toString()) {
          previous = item;
        }
      })
    }
    return previous;
  }
}

class CarouselItem {
  constructor(carouselItem) {
    this.carouselItem = carouselItem;
    this.num = carouselItem.dataset.num;
  }
  select() {
    this.carouselItem.classList.add("Carousel__item-focused");
  }
  deselect() {
    this.carouselItem.classList.remove("Carousel__item-focused");
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));