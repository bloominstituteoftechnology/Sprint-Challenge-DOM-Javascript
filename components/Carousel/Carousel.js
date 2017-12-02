class Carousel {
  constructor(element) {
    this.element = element;
    this.itemList = Array.from(this.element.querySelectorAll(".Carousel__item"));
    this.active = this.itemList.shift();
  }

  moveLeft() {
    this.active.classList.remove("Carousel__item-focused"); // remove the class off the active item
    this.itemList.push(this.active); // add the item to the end of the array
    this.active = this.itemList.shift(); // assign the first item in array to active
    this.active.classList.add("Carousel__item-focused"); // add the class onto active to make it visible
  }

  moveRight() {
    this.active.classList.remove("Carousel__item-focused"); // remove the class off the active item
    this.itemList.unshift(this.active); // will load this.active onto front of array
    this.active = this.itemList.pop(); // assign the last element to active
    this.active.classList.add("Carousel__item-focused"); // add the class onto active to make it visible
  }

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));