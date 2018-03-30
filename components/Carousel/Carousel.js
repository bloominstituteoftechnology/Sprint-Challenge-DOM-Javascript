class CarouselItem {
    constructor(element) {
        this.element = element;
    }
    move() {
        this.element.classList.toggle("Carousel__item-focused");
    }
}
class Carousel {
 constructor(element) {
     this.element = element;
     this.initItems();
     this.initArrows();
 }
    initItems() {
     this.carouselItems = this.element.querySelectorAll(".Carousel__item"); //grab all of items under carousel
     this.carouselItems = Array.from(this.carouselItems).map(item => new CarouselItem(item)); // reassign items pass items through constructor
     this.carouselItems.unshift(this.carouselItems.pop()); // to change viewing of items
     this.Movement = Math.ceil((this.carouselItems.length / 2) - 1); //changes index of carousel item
    }
    initArrows() {
     this.rightArrow = this.element.querySelector(".Carousel__arrow-right");
     this.leftArrow = this.element.querySelector(".Carousel__arrow-left"); // methods for movement to call
     this.rightArrow.addEventListener("click", () => {
         this.moveRight();
     });
     this.leftArrow.addEventListener("click", () => {
            this.moveLeft();
     });
 }
 moveRight() {
     this.carouselItems[this.Movement].move();
     this.carouselItems.push(this.carouselItems.shift());
     this.carouselItems[this.Movement].move();
 }
 moveLeft() {
    this.carouselItems[this.Movement].move();
    this.carouselItems.unshift(this.carouselItems.pop());
    this.carouselItems[this.Movement].move();
}
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));