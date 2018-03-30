class Carouselbox {
    constructor(element, parent) {
        this.element = element;
        // console.log(this.element);
    }

    feature() {
        this.element.classList.add('Carousel__item-focused') //on switch
    }

    hide()  {
        this.element.classList.remove('Carousel__item-focused') //off switch
    }


}

class Carousel {
    constructor(element) {
        this.element = element;
        this.carouselBox = element.querySelectorAll('.Carousel__item');
        this.carouselBox = Array.from(this.carouselBox).map((item) => {
            return new Carouselbox(item, this)
        });
        this.activeCarousel = this.carouselBox[0];
        this.updateCarousel_left();
        this.updateCarousel_right();
    }
    
    updateCarousel_left() {
        this.leftArrow = this.element.querySelector('.Carousel__arrow-left');

        this.leftArrow.addEventListener('click', () => {
            // click left, chnage by -1 based on data.caroItem
            // this.Carouselbox.feature();
            console.log(`clicking left`);

        });
    }

    updateCarousel_right() {
        this.rightArrow = this.element.querySelector('.Carousel__arrow-right');

        this.rightArrow.addEventListener('click', () => {
            // click right, chnage by +1 based on data.caroItem
            // this.Carouselbox.feature();
            console.log(`clicking right`);

        });
    }

}

let carousel = document.querySelectorAll(".Carousel");
carousel = Array.from(carousel).map(carousel => new Carousel(carousel));