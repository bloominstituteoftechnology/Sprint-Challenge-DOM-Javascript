class Carousel {
  constructor(element) {
    this.element = element;

    // Puts Carousel Items into an array
    this.items = element.querySelectorAll(".Carousel__item");
    this.items = Array.from(this.items);
    console.log(this.items);
    this.index = 0;

    // Adds arrow elements into an array
    this.arrows = element.querySelectorAll(".Arrow");
    this.arrows = Array.from(this.arrows);
    console.log(this.arrows);
    // Adds event listeners that return false/true for left/right
    this.arrows[0].addEventListener('click', () => {
      this.updateActive(false);

    });
    this.arrows[1].addEventListener('click', () => {
      this.updateActive(true);

    });
    this.activeData = this.index;
  }

  updateActive(data) {
    if (data) {
      this.items[this.activeData].classList.remove("Carousel__item-focused");
      if (this.activeData === this.items.length - 1) this.activeData = 0;
      else this.activeData++;
      this.items[this.activeData].classList.add("Carousel__item-focused");
    } else {
      this.items[this.activeData].classList.remove("Carousel__item-focused");
      if (this.activeData === 0) this.activeData = this.items.length - 1;
      else this.activeData--;
      this.items[this.activeData].classList.add("Carousel__item-focused");
    }
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));