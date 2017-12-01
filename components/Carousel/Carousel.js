class Carousel {
  constructor(element) {
    // console.log(element);
    this.element = element;
    this.itemList = Array.from(this.element.querySelectorAll(".Carousel__item"));
    // console.log(this.itemList);
    this.active = this.itemList.shift();
    // console.log(this.active);
    this.moveLeft();
  }

  moveLeft() {
    console.log("starting active: ");
    console.log(this.active);
    this.active.classList.remove("Carousel__item-focused");
    console.log("should have removed item-focused class: ")
    console.log(this.active); // remove the class off the active item
    this.itemList.push(this.active); // add the item to the end of the array
    console.log(this.itemList);
    this.active = this.itemList.shift(); // assign the first item in array to active
    console.log(this.active);
    this.active.classList.add(".Carousel__item-focused"); // add the class onto active to make it visible
    console.log("updated item list");
    console.log(this.itemList);
    console.log("updated active item");
    console.log(this.active);
    this.itemList.push(this.active);
    console.log(this.itemList);
  }

  moveRight() {

  }

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));