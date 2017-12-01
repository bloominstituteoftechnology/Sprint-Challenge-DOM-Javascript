class Carousel {
    constructor(element) {
       // attaches dom element to an object 
       this.element = element
        // gets all items from Carousel
        this.items = element.querySelectorAll(".Carousel__item");
        // set the current Carousel item to the first item
        this.activeItem = this.items[0];
        // set the current to zero
        this.activeIndex = 0;

        // get the left and right Carousel arrows
        this.left = element.querySelector(".Carousel__arrow-left");
        this.right = element.querySelector(".Carousel__arrow-right");

        // add event listener to left and right Carousel arrows
        this.left.addEventListener("click", (event) => {
            this.updateActive("left");
        });
        this.right.addEventListener("click", (event) => {
            this.updateActive("right");
        });
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));