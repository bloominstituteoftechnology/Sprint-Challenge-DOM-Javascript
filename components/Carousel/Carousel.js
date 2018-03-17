class Carousel {
    constructor(element) {
        this.element = element;
        this.arrowLeft = this.element.querySelector('.Carousel__arrow-left');
            this.arrowLeft.addEventListener("click", () => {
                this.swipeLeft();
            })
        this.arrowRight = this.element.querySelector('.Carousel__arrow-right');
        this.arrowRight.addEventListener("click", () => {
            this.swipeRight();
        })
    }

    swipeLeft() {
        this.element.classList.toggle("Carousel__item-focused")
    }
    
    swipeRight() {
        this.element.classList.toggle("Carousel__items")


    }

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

// const carouselItems = document.querySelectorAll(".Carousel__item");
// carouselItems = Array.from(carouselItems).map(carousel => new carouselItems(carousel));
// console.log(carouselItems)