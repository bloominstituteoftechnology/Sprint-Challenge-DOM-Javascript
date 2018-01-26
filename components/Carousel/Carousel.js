class Carousel__item {
    constructor(element) {
        this.element = element;
    }
    select() {
        this.element.classList.add('Carousel__item-focused');
    }
    deselect() {
        this.element.classList.remove('Carousel__item-focused');
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));


class Carousel {
    constructor(element) {}
}