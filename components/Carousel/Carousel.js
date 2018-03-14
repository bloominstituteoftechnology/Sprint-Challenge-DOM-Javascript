class CarouselItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.add("Carousel__item-focused");
    }

    deselect() {
        this.element.classList.remove("Carousel__item-focused");
    }
}

class Carousel {
    constructor(element) {
        this.element = element;
        this.caroItems = this.element.querySelectorAll('.Carousel__item');
        this.caroItems = Array.from(this.caroItems);
        this.active = this.element.querySelector('.Carousel__item-focused');
        this.activeIndex = this.caroItems.indexOf(this.active);
        this.right = new RightCarousel(this.element.querySelector('.Carousel__arrow-right'));
        this.left = new LeftCarousel(this.element.querySelector('.Carousel__arrow-left'));
        this.element.addEventListener('click', event => {
            if (event.data === 0 || event.data === 1) {
                this.updateItem(event.data);
                event.stopPropagation();
            }
        });
    }
}

class RightCarousel {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', (event) => {
            event.data = 0;
        });
    }
}

class LeftCarousel {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', (event) => {
            event.data = 1;
        });
    }
}



let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));