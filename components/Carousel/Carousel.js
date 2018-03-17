class Carousel {
    constructor(element) {
        this.pos = 0;
        this.items = element.querySelectorAll(".Carousel__item");
        this.items = Array.from(this.items).map((item) => {
            return new CarouselItems(item);
        })
        this.left = element.querySelector(".Carousel__arrow-left");
        this.right = element.querySelector(".Carousel__arrow-right");
        this.eventLoop();
    }

    eventLoop() {
        this.leftButtonListener();
        this.rightButtonListener();
    }

    rightButtonListener() {
        this.right.addEventListener('click', () => {
            this.items[this.pos].deselect();
            this.pos >= 2 ? this.pos = 2 : this.pos++;
            this.items[this.pos].select();
        });
    }

    leftButtonListener() {
        this.left.addEventListener('click', () => {
            this.items[this.pos].deselect();
            this.pos <= 0 ? this.pos = 0 : this.pos--;
            this.items[this.pos].select();
        });
    }
}

class CarouselItems {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.add('Carousel__item-focused')
    }

    deselect() {
        this.element.classList.remove('Carousel__item-focused')
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));