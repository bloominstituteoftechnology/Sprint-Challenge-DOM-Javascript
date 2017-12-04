class Carousel {
    constructor(element){
        this.element = element;
        this.items = element.querySelectorAll('.Carousel__item');
        this.currentActiveItem = this.items[0];
        // this.currentActiveIndex = 0;
        this.leftArrow = element.querySelector('.Carousel__arrow-left');
        this.rightArrow = element.querySelector('.Carousel__arrow-right');

        this.leftArrow.addEventListener('click', this.updateItem('l'));
        this.rightArrow.addEventListener('click', this.updateItem('r'));
    }

    select() {
        this.currentActiveItem.classList.add('.Carousel__item-focused');
    }

    deselect() {
        this.currentActiveItem.classList.remove('.Carousel__item-focused');
    }

    updateItem(direction) {
        this.deselect();
        if (this.currentActiveItem === this.items[0]) {
            this.currentActiveItem =  this.items[length -1];
        }
        

    }

 }
let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));