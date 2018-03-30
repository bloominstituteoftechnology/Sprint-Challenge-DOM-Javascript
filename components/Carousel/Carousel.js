class Carousel {
    constructor(element) {
        this.element = document.querySelector('.Carousel');
        this.left = this.element.querySelector('.Carousel__arrow-left');
        this.right = this.element.querySelector('.Carousel__arrow-right');
        this.items = this.element.querySelectorAll('.Carousel__items');
        this.counter = 0;
        this.amount = this.items.length;
        this.current = this.element.querySelector('.Carousel__item-focused');

        this.left.addEventListener('click', () => {
            this.move(-1);
        });
        this.right.addEventListener('click', () => {
            this.move(1);
        });
    }

    move(direction) {
        this.current.classList.remove(this.current);
        this.counter = 
        this.current = this.items[this.counter];
        this.current.classList.add('.Carousel__item-focused');
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));