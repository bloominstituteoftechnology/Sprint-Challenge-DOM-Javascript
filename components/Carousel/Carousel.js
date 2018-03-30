let a = 0;

class Carousel {
    constructor(element){
        this.element = element;
        this.leftArrow = element.querySelector('.Carousel__arrow-left');
        this.rightArrow = element.querySelector('.Carousel__arrow-right');
        this.leftArrow.addEventListener('click', () => {this.leftMove()});
        this.rightArrow.addEventListener('click', () => {this.rightMove()});
        this.items = Array.from(this.element.querySelectorAll('.Carousel__item'));
        this.selected = this.items[a];
    }
    leftMove(){
        console.log('left');
        this.selected.classList.remove('Carousel__item-focused');
        this.selected = this.items[--a];
        this.selected.classList.add('Carousel__item-focused');
    }
    rightMove(){
        console.log('right');
        this.selected.classList.remove('Carousel__item-focused');
        this.selected = this.items[++a];
        this.selected.classList.add('Carousel__item-focused');
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
console.log(carousels);