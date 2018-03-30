let leftArrow = document.querySelector('.Carousel__arrow-left');
let rightArrow = document.querySelector('.Carousel__arow-right');

class Carousel {
    constructor(element) {
        this.element = element;
        this.element.addEventListener("click", () => {
            this.rightPlease();
        });
        this.element.addEventListener("click", () => {
            this.leftPlease();
        });

        leftPlease() {
            
        }
        rightPlease() {
        }
    }
}


let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));