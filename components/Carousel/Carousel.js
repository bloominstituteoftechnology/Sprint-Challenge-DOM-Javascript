class Carousel {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => {
            this.element.classList.add()
        });
    }
 
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));