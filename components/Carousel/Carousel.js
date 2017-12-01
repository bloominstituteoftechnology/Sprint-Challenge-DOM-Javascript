class CarouselArrowLeft {
  constructor (element, boxes) {
    this.element = element;
    this.boxes = boxes;
    this.element.addEventListener("click", this.moveLeft);
  }
  
  moveLeft () {
    b.select(this.selectedNum);
  }
}

class CarouselArrowRight {
  constructor (element) {
    this.element = element;
    this.element.addEventListener("click", this.moveLeft);
  }
  
  moveRight () {
    this.selectedNum--;
    if(this.selectedNum <= 0) this.selectedNum = 3;
    this.select(this.selectedNum);
  }
}

class CarouselBox {
  constructor (element) {
    this.element = element;
  }
  
  select () {
    if (!this.element.classList.contains("Carousel__item-focused")) {
      this.element.classList.add("Carousel__item-focused");
    }
  }
  
  deselect () {
    this.element.classList.remove("Carousel__item-focused");
  }
}

class Carousel {
  constructor (element) {
    this.element = element;
    this.boxes = this.element.querySelectorAll(".Box");
    this.boxes = Array.from(this.boxes).map(boxes => new CarouselBox(boxes));
    this.left = this.element.querySelector(".Carousel__arrow-left"); //find left/right arrows
    this.left = new CarouselArrowLeft(this.left, this.boxes);
    this.right = this.element.querySelector(".Carousel__arrow-right");
    this.right = new CarouselArrowRight(this.right, this.boxes);

  }
}

let carousel = document.querySelector(".Carousel");
carousel = new Carousel(carousel);