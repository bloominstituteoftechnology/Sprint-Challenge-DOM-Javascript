class Carousel {
    constructor(element) {
        this.element = element;
        this.leftArrow = document.getElementsByClassName("Carousel__arrow-left")[0];
        this.leftArrow.addEventListener('click', (leftArrow) => leftArrow.parentElement.toLeft());
        this.rightArrow = document.getElementsByClassName("Carousel__arrow-right")[0];
        this.rightArrow.addEventListener('click', element => toRight());
        this.items = element.getElementsByClassName("Carousel__item");
        this.items = Array.from(this.items).map(item => new CarouselItem(item));
        this.focusIndex = 0;
        this.activeItem = this.items[this.focusIndex];
    }
    toRight() {
        this.activeItem.deselect();
        if(this.focusIndex++ < items.length){
        this.focusIndex++;
        }
        else{
            this.focusIndex = 0;
        }
        this.activeItem = items[this.focusIndex];
        this.activeItem.select();
    }
    toLeft() {
        this.activeItem.deselect();
        this.focusIndex--;
        this.activeItem = items[this.focusIndex];
        this.activeItem.select();
    }

}

class CarouselItems {
    constructor(element) {
        this.element = element;
    }    
}

class CarouselItem {
    constructor(element) {
        this.element = element;
    }
    select() {
        this.element.classList.add("Carousel__item-focused");
    }
    deselect() {
        this.element.classList.remove("Carousel__item-focused");
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));