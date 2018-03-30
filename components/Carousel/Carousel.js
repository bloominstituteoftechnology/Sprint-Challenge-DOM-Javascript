






class Carousel {
    constructor(handler, slide) {
        this.handler = handler;
        this.slide = slide;
        this.handler.addEventListener('click', () => {this.move()})
    }
    move() {
        this.slide.classList.add('Carousel--above')
    }
}




let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));