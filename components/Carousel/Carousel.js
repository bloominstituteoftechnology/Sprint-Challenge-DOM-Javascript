
class CarouselNav {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', (event) => {
      //
    });
  }

  select() {
    this.element.classList.add("Tabs__link--selected");
  }

  deselect() {
    this.element.classList.remove("Tabs__link--selected");
  }
}
class Carousel {
  constructor(element) {
    this.element = element;
    this.arrowLeft = element.querySelector(".Carousel__arrow-left");
    this.arrowRight = element.querySelector(".Carousel__arrow-right");
    console.log(this.arrowLeft, this.rrowRight);
    this.slides = element.querySelectorAll(".Carousel__item");
    this.slides = Array.from(this.slides).map((slide) => {
      return new Slide(link, this);
    });
    this.element.addEventListener('click', (event) => {
      if (event.tabData) {
       this.updateActive(event.tabData);
       event.stopPropagation(); 
      }
    })
  } 
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));