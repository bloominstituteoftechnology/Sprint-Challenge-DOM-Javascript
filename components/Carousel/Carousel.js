class CarouselItem {
    constructor (element) {
        this.element = element;
    }

    select() {
        this.element.classList.add('Carousel__item-focused');
    }

    deselect() {
        this.element.classList.remove('Carousel__item-focused');
    }
}

class Carousel {
    constructor (element) {
        this.element  = element;
        this.items = element.querySelectorAll('.Carousel__item');
        this.items = Array.from(this.items).map((item) => {
            return new CarouselItem(item);
        });

        this.arrowLeft = element.querySelector('.Carousel__arrow-left');
        this.arrowRight= element.querySelector('.Carousel__-arrow-right');

        this.arrowLeft.addEventListener('click', (event) => {
            this.updateActive('left');
        });


    this.activeData = 0;
    }

    updateActive (arrow) {
        if (arrow === null) return;
        this.items[this.activeData].deselect();
        if (arrow === 'left') {
            if (this.activeData === 0) this.activeData = 3;
            this.items[--this.activeData].select();
        }
        if (arrow === 'right') {
            if (this.activeData === 2) this.activeData = -1;
            this.items[++this.activeData].select();
        }
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));