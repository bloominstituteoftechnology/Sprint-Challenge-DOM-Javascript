class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.rightArrow = this.carousel.querySelector('.Carousel__arrow-right');
    this.leftArrow = this.carousel.querySelector('.Carousel__arrow-left');

    this.rightArrow.addEventListener('click', () => this.nextSlide() );
    this.leftArrow.addEventListener('click', () => this.prevSlide() );

    this.carouselItems = carousel.querySelectorAll('.Carousel__item');
  }

  nextSlide() {
    for (let i = 0; i < this.carouselItems.length; i++) {
      if (this.carouselItems[i].classList.contains('Carousel__item-focused')) {
        this.carouselItems[i].classList.remove('Carousel__item-focused');
        this.carouselItems[(i + 1) % 3].classList.add('Carousel__item-focused');
        break;
      }
    }
  }

  prevSlide() {
    for (let i = 0; i < this.carouselItems.length; i++) {
      if (this.carouselItems[i].classList.contains('Carousel__item-focused')) {
        this.carouselItems[i].classList.remove('Carousel__item-focused');
        if (i === 0) i = 3;
        this.carouselItems[i - 1].classList.add('Carousel__item-focused');
        break;
      }
    }
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
