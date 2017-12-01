// class Carousel {
//     constructor(element) {
//         this.element = element;
//     }
// }

// let carousels = document.querySelectorAll(".Carousel");
// carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

let carouselItem = document.querySelectorAll(".Carousel__item");
let leftArrow = document.querySelector(".Carousel__arrow-left");
let rightArrow = document.querySelector(".Carousel__arrow-right");
let active = 0;
leftArrow.addEventListener('click',moveLeft, false);
rightArrow.addEventListener('click', moveRight,false);

function moveLeft(e) {
    if (active === 0) {
        carouselItem[active].classList.remove('Carousel__item-focused');
        active = carouselItem.length - 1;
        carouselItem[active].classList.add('Carousel__item-focused');
    } else {
        carouselItem[active].classList.remove('Carousel__item-focused');
        carouselItem[active - 1].classList.add('Carousel__item-focused');
        active -= 1;
    }
}
function moveRight(e) {
    if (active === carouselItem.length - 1) {
        carouselItem[active].classList.remove('Carousel__item-focused');
        active = 0;
        carouselItem[active].classList.add('Carousel__item-focused');
        } else {
    carouselItem[active].classList.remove('Carousel__item-focused');
    carouselItem[active + 1].classList.add('Carousel__item-focused');
    
    active += 1;
        }
    console.log(active);
}