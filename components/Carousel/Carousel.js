class Carousel {
    constructor(options){
        this.options = options;
        this.carousel =options.querySelectorAll(".Carousel__items");
    }

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));