class Carousel {
  constructor(element) {
      this.element = this;
  }

  select() {
    this.element.classList.add();
  }

  deselect() {
    this.element.classList.remove();
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));