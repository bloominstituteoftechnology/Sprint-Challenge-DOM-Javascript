class CarouselItem {
    constructor(element) {
    this.element = element;
    console.log("carousel items assigned")
    }

    select() {
    this.element.classList.add('Carousel__item-focused');
    }

    deselect() {
    this.element.classList.remove('Carousel__item-focused');
    }
}

class CarouselArrow {
    constructor(element, parent) {
        this.arrRight = document.querySelector('Carousel__arrow-right');
        console.log("arrow assigned")
        this.arrLeft = document.querySelector('Carousel__arrow-left');
        this.element = element;
        this.carousel = parent;
        this.arrLeft.addEventListener('click', () => {
            console.log("clicked on left arrow");
            // this.carousel.updateActive(this);
            // this.select();
        });
    };

    select() {
        this.carouselItem.select();
    }

    deselect() {
        this.carouselItem.deselect();

    }
}

class Carousel {
    constructor(element) {
        this.element = element;
        this.carouselItems = element.querySelectorAll('.Carousel__item');
        this.focusedCarouselItem = this.carouselItems[0];
        console.log("carousel assigned")
    }

    updateActive(newActive) {
        this.focusedCarouselItem.deselect();
        this.focusedCarouselItem = newActive;
    }

    getCarousel(data) {
        return this.element.querySelector(`.Carousel__item[data-carousel='${data}']`);
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
  