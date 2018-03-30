class Carousel {
    constructor(element) {
        this.element = document.querySelector('.Carousel');
        this.left = this.element.querySelector('.Carousel__arrow-left');
        this.right = this.element.querySelector('.Carousel__arrow-right');
        this.items = this.element.querySelectorAll('.Carousel__items');
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));