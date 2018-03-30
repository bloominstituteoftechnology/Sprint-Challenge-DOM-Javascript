
class Carousel {
    constructor(element) {
        this.element = element;
        this.items = element.querySelectorAll(".Carousel__items");
        this.items = Array.from(this.items).map((item) => {
            return new CarouselItems(item, this);
        })
    }

}

class CarouselItems {
    constructor(element) {
        this.element = element; 
        console.log("CarouselItems is being called. ")
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));