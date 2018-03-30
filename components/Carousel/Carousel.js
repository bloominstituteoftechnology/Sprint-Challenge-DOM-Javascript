class Carousel {
    constructor(element) {
        this.element = document.querySelector('.Carousel');
        this.left = this.element.querySelector('.Carousel__arrow-left');
        this.right = this.element.querySelector('.Carousel__arrow-right');
        this.items = this.element.querySelectorAll('.Carousel__items');
        this.amount = this.items.length - 1;
        this.current = this.element.querySelector('.Carousel__item-focused');

        this.box(this.current);

        this.left.addEventListener('click', () => {
            console.log('clicked');
            this.moveLeft();
        });
        this.right.addEventListener('click', () => {
            console.log('clicked');
            this.moveRight();
        });
    }

    moveLeft(interval) {
        (this.current === 0) ? this.current = this.amount : this.current -= 1;

        this.stop();
        this.box(this.current);

        if (typeof interval === 'number' && (interval % 1) === 0) {
            let context = this;
            this.run = setTimeout(() => {
                context.moveLeft(interval);
            }, interval);
        }
    }
    
    moveRight(interval) {
        (this.current === this.amount) ? this.current = 0 : this.current += 1;

        this.stop();
        this.box(this.current);

        if (typeof interval === 'number' && (interval % 1) === 0) {
            let context = this;
            this.run = setTimeout(() => {
                context.moveRight(interval);
            }, interval);
        }
    }

    stop() {
        clearTimeout(this.run);
    }

    box(index) {
        if (index >= 0 && index <= this.amount) {
            this.stop();
            for (let b = 0; b <= this.amount; b++) {
                if (b === index) {
                    this.box[s].style.display = "inline-block";
                } else {
                    this.box[s].style.display = "none";
                }
            }
        }
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));