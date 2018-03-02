// Sprint-Challenge-DOM-Javascript - Joshua Goode 

class Carousel {
    constructor(element) {
        this.carousel = element;
        //Query Carousel items and arrows
        this.carouselItems = this.carousel.querySelectorAll(".Carousel__item");
        this.leftArrow = this.carousel.querySelectorAll(".Carousel__arrow-left");
        this.rightArrow = this.carousel.querySelectorAll(".Carousel__arrow-right");
        //Attatch event listeners to arrows
        this.addEvents();
    }

    addEvents() {
        //Attatch event listeners to arrows
        this.rightArrow[0].addEventListener('click', (event) => {
            //Call content updater and provide which arrow was clicked
            this.updateContent('rightArrow');
        });

        this.leftArrow[0].addEventListener('click', (event) => {
            //Call content updater and provide which arrow was clicked
            this.updateContent('leftArrow');
        });
    }

    updateContent(arrowDirection) {
        //Setup loop to iterate over each carousel item, track which item focus is on, remove and add focus accordingly based on which arrow direction argument is passed
        for (let i = 0; i <= this.carouselItems.length; i++) {
            if (this.carouselItems[i].classList.contains('Carousel__item-focused') && arrowDirection === 'rightArrow') {
                if (i + 1 > this.carouselItems.length - 1) {return;}
                this.carouselItems[i + 1].classList.add('Carousel__item-focused');
                this.carouselItems[i].classList.remove('Carousel__item-focused');
                return;

            } else if (this.carouselItems[i].classList.contains('Carousel__item-focused') && arrowDirection === 'leftArrow') {
                if (i - 1 < 0) {return;}
                this.carouselItems[i - 1].classList.add('Carousel__item-focused');
                this.carouselItems[i].classList.remove('Carousel__item-focused');
                return;

            }
        }
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));