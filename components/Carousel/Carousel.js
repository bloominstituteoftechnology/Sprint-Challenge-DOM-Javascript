class Carousel {
    constructor(element) {
        this.element = element;
        this.leftArrow = element.querySelector('.Carousel__arrow-left');
        this.leftArrow.addEventListener('click', () => {
            this.rotateLeft();
        });
        this.rightArrow = element.querySelector('.Carousel__arrow-right');
        this.rightArrow.addEventListener('click', () => {
            this.rotateRight();
        });
        this.items = element.querySelectorAll('.Carousel__item');
        
        this.items = Array.from(this.items).map(item => new CarouselItem(item));
        
        console.log(this.items[0]);
        
        
        this.index = 0;
        
        this.focusedItem = this.items[0];
        
    }

    rotateRight() {
        this.items[this.index].element.classList.toggle('Carousel__item-focused');
        //this.items[this.index].element.style.background = 'blue';
        if (this.index === this.items.length - 1) {
            this.index = 0;
        } else {
            this.index++;
        }
        this.items[this.index].element.classList.toggle('Carousel__item-focused');
    }

    rotateLeft() {
        this.items[this.index].element.classList.toggle('Carousel__item-focused');
        if (this.index === 0) {
            this.index = this.items.length - 1;
        } else {
            this.index--;
        }
        this.items[this.index].element.classList.toggle('Carousel__item-focused');

    }
}

class CarouselItem {
    constructor(element) {
        this.element = element;
    }
}

let carousels = document.querySelectorAll(".Carousel");

carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
