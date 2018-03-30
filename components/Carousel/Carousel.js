class Carousel {
    constructor(element){
        this.element = element;
        this.leftArrow = element.querySelector('.Carousel__arrow-left');
        this.rightArrow = element.querySelector('.Carousel__arrow-right');
        this.leftArrow.addEventListener('click', () => {this.leftMove()});
        this.rightArrow.addEventListener('click', () => {this.rightMove()});

    }
    leftMove(){
        console.log('left');
    }
    rightMove(){
        console.log('right');
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
console.log(carousels);