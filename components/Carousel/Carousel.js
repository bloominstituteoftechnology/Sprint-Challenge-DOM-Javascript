class Carousel {
    constructor(element) {
        this.element = element;
        this.leftArrow = element.querySelector('.Carousel__arrow-left');
        this.leftArrow.addEventListener('click', () => {
            this.updateActive('left');
        });
        this.rightArrow = element.querySelector('.Carousel__arrow-right');
        this.rightArrow.addEventListener('click', () => {
            this.updateActive('right');
        });
    }
    updateActive(direction) {
        if (this.activeIndex === 0 && direction === 'left') {
            this.activeIndex = this.carouselItems.length - 1;
        }
    }

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));