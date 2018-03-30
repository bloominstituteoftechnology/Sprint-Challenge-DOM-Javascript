class Carousel {
    constructor(element) {
        this.element = element;
        this.arrow
    }

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

