class Carousel {
    constructor(el) {
        this.element el;
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));