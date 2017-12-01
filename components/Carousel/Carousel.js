// class Carousel {

// }

// let carousels = document.querySelectorAll(".Carousel");
// carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

/* JS Functions without Class */
const slide = document.querySelectorAll(".Carousel__item");
const slideArr = Array.from(slide);
let i = 0
let activeSlide = slideArr[i];

const leftClick = () => {
  i = i - 1;
  activeSlide = slideArr[i];
  if (i - 1 < -1) {
    i = slideArr.length - 1;
    activeSlide = slideArr[i];
  }
  return activeSlide;
};

const rightClick = () => {
  i = i + 1;
  activeSlide = slideArr[i];
  if (i + 1 > slideArr.length) {
    i = 0;
    activeSlide = slideArr[i];
  }
  return activeSlide;
};

document.querySelector(".Carousel__arrow-left").addEventListener("click", function() {
			activeSlide.classList.remove("Carousel__item-focused");
			leftClick();
			activeSlide.classList.add("Carousel__item-focused");
		});

document.querySelector(".Carousel__arrow-right").addEventListener("click", function() {
			activeSlide.classList.remove("Carousel__item-focused");
			rightClick();
			activeSlide.classList.add("Carousel__item-focused");
		});
