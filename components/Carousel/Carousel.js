class Carousel {
    // create constructor
    constructor(element) {
        this.element = element;
        // get a list of items
        this.list = Array.from(document.querySelectorAll('.Carousel__item')).map(item => new CarouselItem(item));
        this.leftArrow = document.querySelector('.Carousel__arrow-left');
        this.rightArrow = document.querySelector('.Carousel__arrow-right');
        this.size = this.list.length;
        this.currentIndex = 0;
        this.leftArrow.addEventListener('click', () => {
            this.list[this.currentIndex].element.style.display = 'none';
            this.currentIndex++;
            this.list[this.currentIndex].element.style.display = 'inline';
        });

    }

}

class CarouselItem {
    constructor(element) {
        this.element = element;
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
console.log(carousels);