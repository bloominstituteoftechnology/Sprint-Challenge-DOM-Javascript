class Carousel {
    constructor(element) {
        this.element = element;
        this.leftArrow = element.querySelectorAll(".Carousel__arrow-left")
        this.rightArrow = element.querySelectorAll(".Carousel__arrow-right")
        this.items = element.querySelectorAll(".Carousel--items")
        this.activeItem = this.items[0];
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));