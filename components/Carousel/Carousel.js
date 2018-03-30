// ________ STRETCH ________


class Carousel {
    constructor(element) {
        this.element = element;
        this.dataNumber = document.querySelector('.Carousel__item-focused').dataset.number;
        console.log(this.dataNumber);
        this.currentItem = document.querySelector(`.Carousel__items[dataNumber='${this.dataNumber}']`);
        this.left = document.querySelector('.Carousel__arrow-left');
        this.right = document.querySelector('.Carousel__arrow-right');
        this.left.addEventListener('click', () => {this.previousItem(this.currentItem)});
        this.right.addEventListener('click', () => {this.nextItem(this.currentItem)})
    }
    nextItem(currentItem) {
        currentItem.classList.toggle('Carousel__item-focused');
    }
    previousItem(currentItem) {
        currentItem.classList.toggle('Carousel__item-focused');
    }
}


let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
arrow = new Arrow (arrow);