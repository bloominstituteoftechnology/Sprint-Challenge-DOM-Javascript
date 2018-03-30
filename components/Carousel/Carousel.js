// class CarouselItem {
//     constructor(element) {
//         this.element = element;
//     }
// }


// class Carousel {
//     constructor(element) {
//         this.element = element;
//         this.slide = document.querySelector('.Carousel__item');
//         this.slide = Array.from(this.slide).map(slide => new CarouselItem(slide));
//         this.current = 0;
//         this.focus();
//     }

//     unfocus() {
//         this.element.children[current].classList.remove('Carousel__item-focused')
//     }

//     focus() {
//         this.element.children[current].classList.add('Carousel__item-focused')
//     }

//     goLeft() {
//         unfocus();
//         current = ((current + 2) % 3);
//         focus();
//     }

//     goRight() {
//         unfocus();
//         current = ((current + 1) % 3);
//         focus();
//     }
// }

// let carousels = document.querySelectorAll(".Carousel__items");
// carousels = new Carousel(carousels);

const cars = document.querySelectorAll(".Carousel__item");
const left = document.querySelector('.Carousel__arrow-left');
const right = document.querySelector('.Carousel__arrow-right');

let current = 0;
let interval;

const unfocus = () => {
    clearInterval(interval);
    cars[current].classList.remove('Carousel__item-focused')
};

const focus = () => {
    cars[current].classList.add('Carousel__item-focused')
    interval = window.setInterval(goRight, 5000);
};

const goLeft = () => {
    unfocus();
    current = ((current + 2) % 3);
    focus();
};

const goRight = () => {
    unfocus();
    current = ((current + 1) % 3);
    focus();
};

left.addEventListener('click', goLeft);
right.addEventListener('click', goRight);
focus();

