
class Slide {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add("Carousel__item-focused");
  }

  deselect() {
    this.element.classList.remove("Carousel__item-focused");
  }
}

class Carousel {
  constructor(element) {
    this.element = element;
    // Gets the let and Right arrows
    this.arrowLeft = element.querySelector(".Carousel__arrow-left");
    this.arrowRight = element.querySelector(".Carousel__arrow-right");

    this.slides = element.querySelectorAll(".Carousel__item");
    this.slides = Array.from(this.slides).map((slide) => {
      return new Slide(slide, this);
    });

    this.element.addEventListener('click', (event) => {
      let current = this.getCurrentSlideIndex();
      if (event.target === this.arrowLeft) {
          if(current === -1) return;
          else if (current === 0){
            this.slides[current].deselect()
            this.slides[this.slides.length-1].select();
            // return this.slides[length-1].select();
          }
          else {
            this.slides[current].deselect();
            this.slides[current-1].select();
          }
        }
    })
    this.init();
  }
  init() {
    this.slides[0].select();
  }

  getCurrentSlideIndex() {
    const currentSlideData = this.element.querySelector(".Carousel__item-focused").dataset.slide;
    const currentSlideIndex = this.slides.findIndex(slide => slide.element.dataset.slide === currentSlideData);
    return currentSlideIndex;
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
