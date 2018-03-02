class Carousel {
  constructor(element) {
    this.element = element;
    
    this.items = element.querySelectorAll(".Carousel__item");
    this.items = Array.from(this.items).reduce((obj, item) => {
      obj[item.dataset.carousel] = new CarouselItem(item);
      return obj;
    }, {});

    this.element.addEventListener('click', (event) => {
      if (event.carouselData) {
       this.rotateCarousel(event.carouselData);
       event.stopPropagation(); 
      }
    });



    this.activeData = element.querySelector(".Carousel__item-focused");
    this.activeData = this.activeData ? this.activeData.dataset.carousel : null;
    this.rotateCarousel(this.activeData);
  }
  rotateCarousel(data) {
    if (data === null) return;
    
    this.items[this.activeData].unfocus();
    this.items[data].focus();
    this.activeData = data;
  }
}

class CarouselItem {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', (event) => {
      event.CarouselData = this.element.dataset.carousel;
    });
  }
  focus() {
    this.element.classList.add("Carousel__item-focused");
  }
  unfocus() {
    this.element.classList.remove("Carousel__item-focused");
  }
}






let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));