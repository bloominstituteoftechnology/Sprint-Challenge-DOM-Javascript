class Carousel {
    this.element = element;
    this.boxes = boxes;
    this.element.addEventListener("click", this.moveRight);
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));