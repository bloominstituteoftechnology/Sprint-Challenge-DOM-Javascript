class CarouselItem {
    constructor(element) {
        // attach dom element to object. Example in Tabs class
        this.element = element;
    }

    focus() {
        // should use classList
        this.element.classList.add('Carousel__item-focused');
        
    }
    
    unfocus() {
        // should use classList
        this.element.classList.remove('Carousel__item-focused');
    }
}

class Carousel {
    constructor(element){
        this.element = element; //attaches the dom node to the object as "this.element"

        // get the carousel items
        this.carouselItems = element.querySelectorAll('.Carousel__item');

        // reassign the arousel items as an Array of object items
        this.carouselItems = Array.from(this.carouselItems).map(carouselItem => new CarouselItem(carouselItem));
        
        this.carouselItemIndex = 0;
        this.carouselItemLength = this.carouselItems.length;
        // get the left arrow and right arrow
        this.leftArrow = element.querySelector('.Carousel__arrow-left');
        this.leftArrow.addEventListener('click', () => {
            if (this.carouselItemIndex === 0) {
                this.carouselItemIndex = this.carouselItemLength - 1;
            } else {
                this.carouselItemIndex--;
            }
            this.updateCarousel();
        });

        this.rightArrow = element.querySelector('.Carousel__arrow-right');
        this.rightArrow.addEventListener('click', () =>{
            if ( this.carouselItemIndex === (this.carouselItemLength - 1)){
                this.carouselItemIndex = 0;
            } else {
                this.carouselItemIndex++;
            }
            this.updateCarousel();
        });



        // this will be the initial focussed item
        this.focusItem = this.carouselItems[this.carouselItemIndex];

        //focus on the initial item
        this.init();
    }

    init() {
        // focus on the first item upon ititialization
        this.focusItem.focus();;
    }

    updateCarousel() {
        // unfocus the old focus Item
        this.focusItem.unfocus();
        // assign the new item focus
        this.focusItem = this.carouselItems[this.carouselItemIndex];

        // focus on the item
        this.focusItem.focus();
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
