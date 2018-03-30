class Carousel {
    constructor(element){
        this.element = element;
        this.leftArrow = element.querySelector('.Carousel__arrow-left');
        this.rightArrow = element.querySelector('.Carousel__arrow-right');
        this.leftArrow.addEventListener('click', () => {this.leftMove()});
        this.rightArrow.addEventListener('click', () => {this.rightMove()});
        this.items = Array.from(this.element.querySelectorAll('.Carousel__item'));
    }
    leftMove(){
        console.log('left');
    }
    rightMove(){
        console.log('right');
        this.items[0].classList.remove('Carousel__item-focused');
        this.items[1].classList.add('Carousel__item-focused');
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
console.log(carousels);