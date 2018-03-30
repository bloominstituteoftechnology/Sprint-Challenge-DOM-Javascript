class CarouselItem {
    constructor(el) {
        this.el = el;
    }

    show(target) {
        this.el.classList.add('Carousel__item--show');
    }
    hide(target) {
        this.el.classList.remove('Carousel__item--show');
    }
}

class CarrowLeft {
    constructor(el) {
        this.el= el;
        this.el.addEventListener("mouseover", () => this.el.classList.toggle('Carousel__arrow--hover'));
        this.el.addEventListener("mouseout", () => this.el.classList.toggle('Carousel__arrow--hover'));
        this.el.addEventListener('click', (event) => {this.moveLeft()});
        this.CarouselItem = Carousel.querySelector(".Carousel__item");
    }

    moveLeft(event) {

    }
}



let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

let arrowLeft = document.querySelector(".Carousel__arrow-left");
let CarrowLeft = new CarrowLeft(CarrowLeft);
