class Carousel {
    constructor(element) {
        this.element = element;
        this.items = element.querySelectorAll(".Carousel__item");
        this.items = Array.from(this.items);

        this.arrows = element.querySelectorAll(`.Carousel__Arrow-${direction}`);  // ?
        this.arrows = Array.from(this.arrows);
    // i'm lost

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));