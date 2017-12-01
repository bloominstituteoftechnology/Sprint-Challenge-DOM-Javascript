class Carousel {
    constructor(element) {
        this.element =  element;
        this.items = Array.from(element.querySelectorAll(".Carousel__item"));
        this.active = element.querySelector(".Carousel__item--focused");
        this.element.addEventListener('click', () => {
                this.active.classList.remove("Carousel__item--focused");
                this.active = this.items[this.items.indexOf(this.active)+1];
                this.active.classList.add("Carousel__item--focused");
        });
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));