class Carousel {
  constructor(element) {
    console.log(element);
    this.element = element;
    this.carouselItems = this.element.querySelectorAll('.Carousel__item');
    this.carouselItems = Array.from(this.carouselItems).map(item => {
      return item;
    });
    this.next = this.element.querySelector('.Carousel__arrow-right');
    this.previous = this.element.querySelector('.Carousel__arror-left');
    this.counter = 0;
    this.amount = this.carouselItems.length;
    this.current = this.carouselItems[0];
    this.next.addEventListener('click', () => {
      this.navigate(1);
    });

    this.previous.addEventListener('click', () => {
      this.navigate(-1);
    });
  }
  navigate(direction) {
    this.current.classList.remove('Carousel__item-focused');
    this.counter += direction;
    if (direction === -1 && this.counter < 0) {
      this.counter = this.amount - 1;
    }
    if (direction === 1 && this.counter > this.amount) {
      this.counter = 1;
    }
    this.current = this.carouselItems[counter];
    this.current.classList.add('Carousel__item-focused');
  }
}

carousels = document.querySelectorAll('.Carousel');
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
