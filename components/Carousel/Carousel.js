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
