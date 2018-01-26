class CarouselItem {
    constructor(element) {
    }
}



class Carousel {
    constructor(element) {
        this.element = element;
        this.items = element.querySelectorAll('.Carousel__items');
        this.items = Array.from(this.item).map((item) => {
            return new (item, this);
        })
    }

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));