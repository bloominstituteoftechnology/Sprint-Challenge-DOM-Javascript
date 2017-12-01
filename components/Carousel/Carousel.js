class Carousel {
  constructor(carousel) {
    this.carousel = carousel;

    this.currentIndex = 0;

    this.items = Array.from(this.carousel.querySelectorAll(".Carousel__item"));
    this.itemsCount = this.items.length || 0;

    this.leftArrow = this.carousel.querySelector(".Carousel__arrow-left");
    this.leftArrow.addEventListener("click", event => {
      this.previous();
    });

    this.rightArrow = this.carousel.querySelector(".Carousel__arrow-right");
    this.rightArrow.addEventListener("click", event => {
      this.next();
    });
  }
  
  next() {
    if (this.currentIndex !== this.itemsCount - 1){
 
      this.items[this.currentIndex].classList.remove("Carousel__item-focused");
      this.items[++this.currentIndex].classList.add("Carousel__item-focused");

    }
  }

  previous() {
    if (this.currentIndex !== 0){
      
      this.items[this.currentIndex].classList.remove("Carousel__item-focused");
      this.items[--this.currentIndex].classList.add("Carousel__item-focused");

    }
  }

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));