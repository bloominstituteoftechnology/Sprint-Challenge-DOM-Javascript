class Carousel {
    constructor(element) {
        this.element = element;
        this.slide = this.element.querySelectorAll('.Carousel__item');
        this.left = this.element.querySelector('.Carousel__arrow-left');
        this.left.addEventListener('click', () => { this.goLeft() });
        this.right = this.element.querySelector('.Carousel__arrow-right');
        this.right.addEventListener('click', () => { this.goRight() });
        this.current = 0;
        this.focus();
    }

    unfocus() {
        clearInterval(this.interval);
        this.slide[this.current].classList.remove('Carousel__item-focused')
    }

    focus() {
        this.slide[this.current].classList.add('Carousel__item-focused')
        this.interval = setInterval(this.goRight.bind(this), 12000);
    }

    goLeft() {
        this.unfocus();
        this.current = ((this.current + (this.slide.length - 1)) % this.slide.length);
        this.focus();
    }

    goRight() {
        this.unfocus();
        this.current = ((this.current + 1) % this.slide.length);
        this.focus();
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));