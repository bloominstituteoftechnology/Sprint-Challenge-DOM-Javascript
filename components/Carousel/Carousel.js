class CarouselItem {
    constructor(element) {
      this.element= element;
    }
  
    displayItem() {
      this.element.classList.add(".Carousel__item-focused");
    }
  
    hideItem() {
      this.element.classList.remove(".Carousel__item-focused");
    }


}
class Carousel {
    constructor(element) {
      this.element = element;
      this.links = element.querySelectorAll(".Carousel__items");
      this.links = Array.from(this.links).map((link) => {
        return new CarouselItem(link, this);
      });
      this.activeDisplay = this.links[0];
      this.init();
    }
init(){
this.activeDisplay.displayItem();
}
updateDisplay(newDisplay) {
this.activeDisplay.hideItem();
this.activeDisplay = newDisplay;
}
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));