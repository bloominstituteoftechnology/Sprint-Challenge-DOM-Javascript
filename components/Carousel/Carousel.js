class Carousel {
  constructor(element) {
    this.element = element;

    // Get all the carousel items
    this.items = element.querySelectorAll(".Carousel__item");
    // set the current active carousel item to the first one
    this.activeItem = this.items[0];
    // set the current to zero
    this.activeIndex = 0;

    // get the left arrow and right arrow
    this.left = element.querySelector(".Carousel__arrow-left");
    this.right = element.querySelector(".Carousel__arrow-right");

    // add event listener to left arrow and right arrow
    this.left.addEventListener("click", (event) => {
      this.updateActive("left");
    });
    this.right.addEventListener("click", (event) => {
      this.updateActive("right");
    });
  }

  updateActive(arrow) {
    if (arrow === null) return;
    
    // deselect current item
    this.deselect();

    if (arrow === "left") {
      // if current item is the first one, when clicking left arrow, display the last item
      if (this.activeIndex === 0) {
        this.activeIndex = this.items.length - 1;
      } else {
        this.activeIndex--;
      }
    } else if (arrow === "right") {
      // if current item is the last one, when clicking right arrow, display the first item
      if (this.activeIndex === this.items.length - 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex++;
      }
    }
    this.activeItem = this.items[this.activeIndex];
    this.select();
  }

  select() {
    this.activeItem.classList.add("Carousel__item-focused");
  }

  deselect() {
    this.activeItem.classList.remove("Carousel__item-focused");
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
