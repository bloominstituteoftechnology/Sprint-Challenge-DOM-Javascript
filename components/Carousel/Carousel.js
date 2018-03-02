class Carousel {
    constructor(element){
        this.element = element
        this.arrowLeft = element.querySelectorAll(".Carousel__arrow-left");

        this.slides = element.querySelectorAll(".Carousel__items");
        this.slides = Array(this.slides).map((slide) => {
           return new CarousalItem(slide, this);
         });
         console.log(this.slide);
         this.activeSlide = this.slides[0];
        this.arrowRight = element.querySelectorAll(".Carousel__arrow-right");
        }

        update(newSlide) {
            this.activeSlide.deselect();
            this.activeSlide = newSlide;
        }
    

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));


class CarousalItem {
    constructor(element, parent){
        this.selected = parent;
        this.element = element;
        this.element.addEventListener('click', () => {
            this.Carousel.update(this);
            this.element.classList.add("Carousel__item-focused ");
        });
        // this.element.classList.add("Carousel__item-focused");
        // this.element.classList.remove("arousel__item-focused");
    }
}