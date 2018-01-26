class CarouselItem {
  constructor(element) { 
    this.element = element;
  }

  select() {
    this.element.classList.add('Carousel__item-focused');
  }
  deselect() {
    this.element.classList.remove('Carousel__item-focused');
  }

}
class CarouselItems {
  constructor(element,parent) {
    this.element = element;
    console.log(this.element);
    this.carousel = parent;
    this.carouselItem = parent.getCarousel(this.element.dataset.tab);
    this.carouselItem = new CarouselItem(this.carouselItem);

    this.element.addEventListener('click', (e) => {
      e.stopPropagation();
      this.carousel.updateActive(this);
      this.select();
      // console.log('hear it');
      // if (this.element.querySelector('.Carousel__arrow-left')) {
      //   this.carousel.updateActive(this);
      //   this.select();
      // }
      // if (this.element.querySelector('.Carousel__arrow-right')) {
      //   this.carousel.updateActive(this);
      //   this.select();
      //s}
    });
  }
  select() {
    this.carouselItem.select();
  }
  deselect() {
    this.carouselItem.deselect();
  }
}
class Carousel {
  constructor(ele) {
    this.element= ele;
    this.links = this.element.querySelectorAll('.Carousel__items'); // getting array of Car itmes. Here only one comes.
    this.links = Array.from(this.links).map((link) => { // mapping it one item at a time to car items. Car items has 3 boxes. 
      console.log(this.links);
      return new CarouselItems(link, this); //
    });
    this.activeLink = this.links[0];
    console.log(this.links[0]);
    this.init();
  }
  init() {
    this.activeLink.select();
  }
  updateActive(newLink) {
    this.activeLink.deselect();
    this.activeLink = newLink;

  }
  getCarousel(data) {
    return this.element.querySelector(`.Carousel__item[data-tab = "${data}"]`);
  }
}
let carousels = document.querySelectorAll(".Carousel");
console.log(carousels);
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));