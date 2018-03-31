class Carousel {
    constructor(element) {
        this.element = element;
        this.items = document.querySelectorAll (".Carousel__item");
        this.arrowLeft = document.querySelector(".Carousel__arrow-left");
        this.arrowRight = document.querySelector(".Carousel__arrow-right");
        this.index= 0;
        this.arrowLeft.addEventListener('click', () => {this.goLeft()})
        this.arrowRight.addEventListener('click', () => {this.goRight()})        
    }

    goLeft() {
        if(this.index === 0) {
            return;
        }
        const index = this.index;
        this.items[index].classList.remove('Carousel__item-focused');
        this.items[index - 1].classList.add('Carousel__item-focused');
        this.index--
    }

    goRight() {
        if(this.index + 1 === this.items.length){
           return; 
        }
        const index = this.index;
        this.items[index].classList.remove('Carousel__item-focused');
        this.items[index + 1].classList.add('Carousel__item-focused');
        this.index++
    }    
}



let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));