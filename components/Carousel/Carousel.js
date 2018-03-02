class Carousel_Item {
    constructor(element) {
        this.element = element;
    }

    active() {
        this.element.classList.add('Carousel__item-focused');
    }

    inactive() {
        this.element.classList.remove('Carousel__item-focused');
    }
}

//creates a class constructor for a carousel object
class Carousel {
    constructor(element) {
        this.element = element;

        //Attaches dom element (above) and creates an array of carousel item objects using the class constructor created above
        //Then creates a property containing the length of that array and sets an index property to 0

        this.items = element.querySelectorAll('.Carousel__item');
        this.items = Array.from(this.items).map((item) => new Carousel_Item(item));
        this.itemsLength = this.items.length;
        this.itemsIndex = 0;

        this.rtArrow = element.querySelector('.Carousel__arrow-right');
        this.rtArrow.addEventListener('click', () => {
            console.log('clicked');
            if (this.itemsIndex === (this.itemsLength - 1)) {
                this.itemsIndex = 0;
            }
            else {
                this.itemsIndex++; 
            }
            this.syncCar();
        })

        this.lftArrow = document.querySelector('.Carousel__arrow-left');
        this.lftArrow.addEventListener('click', () => {
            console.log('clicked');
            if (this.itemsIndex === 0) {
                this.itemsIndex = (this.itemsLength - 1)
            }
            else {
                this.itemsIndex--;
            }
            this.syncCar();
        })

        this.focusItem = this.items[this.itemsIndex];
        

        this.start();
    }

    start() {
        this.focusItem.active();
    }

    syncCar() {
        this.focusItem.inactive();

        this.focusItem = this.items[this.itemsIndex];

        this.focusItem.active();
    }
};

let carousels = document.querySelectorAll('.Carousel');
carousels = Array.from(carousels).map((item) => new Carousel(item));

/*class CarouselItem {
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
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));*/
