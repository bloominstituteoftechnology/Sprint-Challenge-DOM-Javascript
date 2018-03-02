class Carousel {
    constructor(element) {
        this.element = element;
        this.leftArrow = document.getElementsByClassName("Carousel__arrow-left")[0];
        this.rightArrow = document.getElementsByClassName("Carousel__arrow-right")[0];
        this.items = element.getElementsByClassName("Carousel__item");
        this.items = Array.from(this.items).map(item => new CarouselItem(item));
    }
}

class CarouselItems {
    constructor(element){
        this.element = element;
    }
}

class CarouselItem {
    constructor(element) {
        this.element = element;
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));