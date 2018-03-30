class Carousel {
    constructor(element) {
        this.element = element;
        this.slides = document.querySelectorAll(".Carousel__item");
        // this.slides = Array.from(this.slides);
        this.controlRight = document.querySelector(".Carousel__arrow-right");this.controlLeft = document.querySelector(".Carousel__arrow-left");this.index = 0;
        this.controlRight.addEventListener('click', () => { this.clickRight() });
        this.controlLeft.addEventListener('click', () => { this.clickLeft() });
    }

        clickRight() {
            if (this.index + 1 === this.slides.length) {
                return;
            }
            const index = this.index;
            this.slides[index].classList.remove("Carousel__item-focused");
            this.slides[index + 1].classList.add("Carousel__item-focused");
            this.index++;
        };

        
        clickLeft() {
            if (this.index === 0) {
                return;
            }
            const index = this.index;
            this.slides[index].classList.remove("Carousel__item-focused");
            this.slides[index - 1].classList.add("Carousel__item-focused");
            this.index--;
        };
    }



let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));