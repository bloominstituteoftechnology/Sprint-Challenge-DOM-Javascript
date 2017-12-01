class Carousel {
  constructor(element) {
    console.log(element);
    this.element = element;
  }

  select() {
    this.element.classList.add("Carousel");
  }

  deselect() {
    this.element.classList.remove("Carousel");
  }

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));