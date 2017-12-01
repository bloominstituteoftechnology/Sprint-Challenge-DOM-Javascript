class CarouselItem {
    constructor(carousel) {
      this.carousel = carousel;
    }
  
    select() {
      this.carousel.classList.add('Carousel__item-focused');
    }
  
    deselect() {
      console.log(this.carousel);
      this.carousel.classList.remove('Carousel__item-focused');
    }
  
    getDataIndex() {
      return this.carousel.dataset.tab;
    }
  }
  
  class CarouselController {
    constructor(carousels) {
      this.carousels = carousels;
      console.log(carousels);
      this.currentIndex = 0;
      this.activeCarousel = this.carousels[this.currentIndex];
      this.carouselLeftArrow = document.querySelector('.Carousel__arrow-left');
      this.carouselRightArrow = document.querySelector('.Carousel__arrow-right');
      this.carouselLocationElement = document.querySelector('.Carousel__location');
      this.bindCarouselClickEvents();
      this.setCarouselLocationElement();
    }
  
    getCarousel(index) {
      return this.carousels[index];
    }
  
    setActiveCarousel(carousel) {
      this.activeCarousel.deselect();
      this.activeCarousel = carousel;
      this.activeCarousel.select();
    }
  
    setCarouselLocationElement() {
      this.carouselLocationElement.textContent = `${this.currentIndex + 1} / ${this.carousels.length}`;
    }
  
    bindCarouselClickEvents() {
      this.carouselLeftArrow.addEventListener('click', () => this.moveLeft());
      this.carouselRightArrow.addEventListener('click', () => this.moveRight());
    }
  
    moveLeft() {
      if (this.currentIndex === 0) return;
      this.setActiveCarousel(this.getCarousel(--this.currentIndex));
      this.setCarouselLocationElement();
    }
  
    moveRight() {
      if (this.currentIndex === this.carousels.length - 1) return;
      this.setActiveCarousel(this.getCarousel(++this.currentIndex));
      this.setCarouselLocationElement();
    }
  
  }
  
  let carousels = document.querySelectorAll(".Carousel__item");
  carousels = Array.from(carousels).map(carousel => new CarouselItem(carousel));
  let carouselController = new CarouselController(carousels);