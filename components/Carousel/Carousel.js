class Carousel {
  constructor(element) {
    // using the tab node
    this.element = element; // attaches the dom node to the object as "this.element"
    this.pageSetting = 1;
    this.firstBox = element.querySelector(".Box--grey");
    this.secondBox = element.querySelector(".Box--blue");
    this.thirdBox = element.querySelector(".Box--green");
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
    });
    this.switchEmRight();
  }
  switchEmLeft() {
    switch(this.pageSetting) {
      case 1:
      this.firstBox.classList.remove("Carousel__item-focused");
      this.firstBox.classList.add("Carousel__item");
      this.thirdBox.classList.remove("Carousel__item");
      this.thirdBox.classList.add("Carousel__item-focused");
      break;
      case 2:
      this.thirdBox.classList.remove("Carousel__item-focused");
      this.thirdBox.classList.add("Carousel__item");
      this.secondBox.classList.remove("Carousel__item");
      this.secondBox.classList.add("Carousel__item-focused");
      break;
      case 3:
      this.thirdBox.classList.remove("Carousel__item-focused");
      this.secondBox.classList.add("Carousel__item-focused");
      break;
    }
  }
  switchEmRight() {
    switch(this.pageSetting) {
      case 1:
      this.firstBox.classList.remove("Carousel__item-focused");
      this.secondBox.classList.add("Carousel__item-focused");
    }
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
