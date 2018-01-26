class Carousel {
  constructor(element) {
    // using the tab node
    this.links = element.querySelectorAll(".Carousel__item");
    this.links = Array.from(this.links);
    console.log(this.links);
    this.element = element; // attaches the dom node to the object as "this.element"
    this.pageSetting = 1;
    this.leftArrow = element.querySelector(".Carousel__arrow-left");
    this.rightArrow = element.querySelector(".Carousel__arrow-right");
    this.leftArrow.addEventListener('click', (e) => {
      if (this.pageSetting === 1) {
        this.pageSetting = 3;
      } else {
        this.pageSetting--;
      }
      console.log('you clicked the left arrow: ' + this.pageSetting);
      this.switchEmLeft();
    });
    this.rightArrow.addEventListener('click', (e) => {
      if (this.pageSetting === 3) {
        this.pageSetting = 1;
      } else {
        this.pageSetting++;
      }
      console.log('you clicked the right arrow: ' + this.pageSetting);
      this.switchEmRight();
    });
  }
  switchEmLeft() {
    switch(this.pageSetting) {
      case 1:
      this.links[1].classList.remove("Carousel__item-focused");
      this.links[0].classList.add("Carousel__item-focused");
      break;
      case 2:
      this.links[2].classList.remove("Carousel__item-focused");
      this.links[1].classList.add("Carousel__item-focused");
      break;
      case 3:
      this.links[0].classList.remove("Carousel__item-focused");
      this.links[2].classList.add("Carousel__item-focused");
      break;
    }
  }
  switchEmRight() {
    switch(this.pageSetting) {
      case 1:
      this.links[2].classList.remove("Carousel__item-focused");
      this.links[0].classList.add("Carousel__item-focused");
      break;
      case 2:
      this.links[0].classList.remove("Carousel__item-focused");
      this.links[1].classList.add("Carousel__item-focused");
      break;
      case 3:
      this.links[1].classList.remove("Carousel__item-focused");
      this.links[2].classList.add("Carousel__item-focused");
      break;
    }
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
