class Carousel {

}
let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

let carouselItems = document.querySelectorAll('.Carousel__item');
carouselItems = Array.from(carouselItems);

let activeItem = document.querySelector('.Carousel__item-focused');
let leftArrow = document.querySelector('.Carousel__arrow-left');
let rightArrow = document.querySelector('.Carousel__arrow-right');

leftArrow.addEventListener('click', () => {
  activeItem.classList.remove('Carousel__item-focused');
  if (carouselItems.indexOf(activeItem) === 0) {
    activeItem = carouselItems[carouselItems.length - 1];
  } else {
    activeItem = carouselItems[carouselItems.indexOf(activeItem) - 1];
  }
  activeItem.classList.add('Carousel__item-focused');
})
rightArrow.addEventListener('click', () => {
  activeItem.classList.remove('Carousel__item-focused');
  if (carouselItems.indexOf(activeItem) === carouselItems.length - 1) {
    activeItem = carouselItems[0];
  } else {
    activeItem = carouselItems[carouselItems.indexOf(activeItem) + 1];
  }
  activeItem.classList.add('Carousel__item-focused');
})
