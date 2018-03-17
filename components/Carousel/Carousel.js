class Carousel {
    constructor(element) {
        this.element = element;
    }

    moveRight() {
        let = controlRight = document.querySelector(".Carousel__arrow-right");console.log(constrolRight);
        controlRight.addEventListener("click", () => {
            console.log("click");
        });
    }

    moveLeft() {
        let controlLeft = element.querySelector(".Carousel__arrow-left");this.controlLeft.addEventListener("click", () => {
            console.log("click");
        });
    }
}

class Slides {
    constructor(element) {
        this.element = element;
        this.slides = element.querySelectorAll(".Carousel__items");
        this.slides = Array.from(this.slides);
        console.log(slides);
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));