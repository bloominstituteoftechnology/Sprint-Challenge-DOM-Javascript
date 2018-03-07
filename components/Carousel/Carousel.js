class Carousel {
    constructor(element) {
        this.element = element;        
    }

    toggleFocus() {
        this.element.classList.toggle("Carousel__item-focused");
    }
}  

class Carousel {
    constructor(element) {
        this.element = element;

        this.carouselItems = this.element.querySelectorAll(".Carousel__item");
        this.carouselItems = Array.from(this.carouselItems).map(item => new CarouselItem(item));
        this.carouselItems.unshift(this.carouselItems.pop());
        this.focusIndex = Math.ceil((this.carouselItems.length / 2) - 1);

        this.rightArrow = this.element.querySelector(".Carousel__arrow-right");
        this.leftArrow = this.element.querySelector(".Carousel__arrow-left");
        this.rightArrow.addEventListener("click",() => {
            this.switchRight();
        });
        this.leftArrow.addEventListener("click",() => {
            this.switchLeft();
        });
    }

    // initItems() { // stacks the items logic into an init function
    //     this.carouselItems = this.element.querySelectorAll(".Carousel__item");
    //     this.carouselItems = Array.from(this.carouselItems).map(item => new CarouselItem(item));
    //     this.carouselItems.unshift(this.carouselItems.pop());
    //     this.focusIndex = Math.ceil((this.carouselItems.length / 2) - 1);        
    // }

    // initArrows() { // stacks the arrows logic into an init function
    //     this.rightArrow = this.element.querySelectorAll(".Carousel__arrow-right");
    //     this.leftArrow = this.element.querySelectorAll(".Carousel__arrow-left");
    //     this.rightArrow.addEventListener("click",() => {
    //         this.switchRight();
    //     });
    //     this.leftArrow.addEventListener("click", () => {
    //         this.switchLeft();
    //     });
    // }

    switchRight() {
        this.carouselItems[this.focusIndex].toggleFocus();
        this.carouselItems.push(this.carouselItems.shift());
        this.carouselItems[this.focusIndex].toggleFocus();
    }

    switchLeft() {
        this.carouselItems[this.focusIndex].toggleFocus();
        this.carouselItems.unshift(this.carouselItems.pop());
        this.carouselItems[this.focusIndex].toggleFocus();
    }
}


let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));