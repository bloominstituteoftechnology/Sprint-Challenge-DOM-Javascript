class CarouselItem {
    constructor(element) {
        this.element = element;
        console.log('lol')
    }
}

class Carousel {
    constructor(element) {
        this.element = element;
        this.items = document.querySelectorAll('.Carousel__item');
        this.items = Array.from(this.items).map((items) => {
            return new CarouselItem(items, this);
        });
        console.log('lol');
    }
}

let carousels = document.querySelectorAll(".Carousel");
new Carousel(carousels);