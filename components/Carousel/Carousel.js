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
        this.autoCarousel();
    }
    leftMove(){
        this.selected.classList.remove('Carousel__item-focused');
        this.selected = this.items[--a];
        if(a < 0){
            a = 2;
            this.selected = this.items[a];
        }
        this.selected.classList.add('Carousel__item-focused');
    }
    rightMove(){
        this.selected.classList.remove('Carousel__item-focused');
        if(a < this.items.length - 1){
            this.selected = this.items[++a];
        }
        else if(a === this.items.length - 1){
            a = 0;
            this.selected = this.items[a];
        }
        this.selected.classList.add('Carousel__item-focused');
    }
    autoCarousel(){
        setInterval(() => {
            this.rightMove();
        }, 2000);
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));