class Carousel {
    constructor(element) {
        this.carousel = element;
        this.contentItems = this.carousel.querySelectorAll(".Carousel__item");
        this.leftArrow = this.carousel.querySelectorAll(".Carousel__arrow-left");
        this.rightArrow = this.carousel.querySelectorAll(".Carousel__arrow-right");
        this.init();
    }

    init() {
        this.addEventListeners();
    }

    addEventListeners() {
        this.leftArrow[0].addEventListener('click', (event) => {
            event.stopPropagation();
            this.updateActiveContent('left');
        });
        
        this.rightArrow[0].addEventListener('click', (event) => {
            event.stopPropagation();
            this.updateActiveContent('right');
        });
    }

    updateActiveContent(direction) {
        for (let i=0; i <= this.contentItems.length; i++) {
            if (this.contentItems[i].classList.contains('Carousel__item-focused') && direction === 'right') {
                if(i+1 > this.contentItems.length-1) return;
                this.contentItems[i].classList.remove('Carousel__item-focused');
                this.contentItems[i+1].classList.add('Carousel__item-focused');
                return;

            } else if (this.contentItems[i].classList.contains('Carousel__item-focused') && direction === 'left') {
                if(i-1 < 0) return;
                this.contentItems[i].classList.remove('Carousel__item-focused');
                this.contentItems[i-1].classList.add('Carousel__item-focused');
                return;

            }
        }
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
