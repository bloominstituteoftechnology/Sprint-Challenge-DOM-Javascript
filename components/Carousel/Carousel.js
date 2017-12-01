class Carousel {
    constructor(element) {
        this.element = element;
        // Extract Arrows from Carousel
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
        // console.log(direction, ' was clicked');
        if (this.activeIndex === 0 && direction === 'left') {
            // console.log('do not scroll anymore in that direction')
        } else if (direction === 'left') {
            this.activeIndex--;
            this.activeItem.classList.remove('Carousel__item-focused'); // Hide Current
            this.activeItem = this.element.querySelectorAll('.Carousel__item')[this.activeIndex]; // Update Current
            this.activeItem.classList.add('Carousel__item-focused'); // Show New Current
            // console.log(this.activeItem);
            this.refresh();
        }
        
        if (this.activeIndex === this.carouselItems.length-1 && direction === 'right') {
            // console.log('do not scroll anymore in that direction')
        } else if (direction === 'right') {
            this.activeIndex++;
            this.activeItem.classList.remove('Carousel__item-focused'); // Hide Current
            this.activeItem = this.element.querySelectorAll('.Carousel__item')[this.activeIndex]; // Update Current
            this.activeItem.classList.add('Carousel__item-focused'); // Show New Current
            // console.log(this.activeItem);
            this.refresh();
        }
        // console.log(this.activeIndex);
    }

    refresh() {

    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));