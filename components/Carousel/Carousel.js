class Carousel {
    constructor(element) {
        this.element = element;
        // Extract Arrows from Carousel and Set Events on them!
        this.leftArrow = element.querySelector('.Carousel__arrow-left');
        this.leftArrow.addEventListener('click', () => {
            this.updateActive('left');
        });
        this.rightArrow = element.querySelector('.Carousel__arrow-right');
        this.rightArrow.addEventListener('click', () => {
            this.updateActive('right');
        });
        // Extract Carousel Items from Carousel
        this.carouselItems = element.querySelectorAll('.Carousel__item');
        // Get current active element and save it in a variable
        this.activeItem = this.element.querySelectorAll('.Carousel__item')[0];
        this.activeIndex = 0;
    }
    updateActive(direction) {
        if (this.activeIndex === 0 && direction === 'left') {
            // Implement Looping Here
            this.activeIndex = this.carouselItems.length-1;
            this.hide();
            this.activeItem = this.element.querySelectorAll('.Carousel__item')[this.activeIndex];
            this.show();
            return;
        } else if (direction === 'left') {
            this.activeIndex--;
            this.hide();
            this.activeItem = this.element.querySelectorAll('.Carousel__item')[this.activeIndex]; // Update Current
            this.show();
        }        
        if (this.activeIndex === this.carouselItems.length-1 && direction === 'right') {
            // Implement Looping Here
            this.activeIndex = 0;
            this.hide();
            this.activeItem = this.element.querySelectorAll('.Carousel__item')[this.activeIndex];
            this.show();
            return;
        } else if (direction === 'right') {
            this.activeIndex++;
            this.hide();
            this.activeItem = this.element.querySelectorAll('.Carousel__item')[this.activeIndex]; // Update Current
            this.show();
        }
    }

    hide() {
        this.activeItem.classList.remove('Carousel__item-focused');
    }
    show() {
        this.activeItem.classList.add('Carousel__item-focused')
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));