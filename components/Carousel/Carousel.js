class CarouselItem {
    constructor(element) {
        this.element = element;
      }
    
      select() {
        this.element.classList.add("Carousel__item-focused");
      }
    
      deselect() {
        this.element.classList.remove("Carousel__item-focused");
      }
    }

    
    class Carousel {
      constructor(element) {
        this.element = element;
        this.arrowL = element.querySelector('.Carousel__arrow-left');
        this.arrowR = element.querySelector('.Carousel__arrow-right');

        this.counter = 0;

        // 
        this.carouselItems = document.querySelectorAll(".Carousel__item");
        this.carouselItems = Array.from(this.carouselItems).map(carouselItem => new CarouselItem(carouselItem));

        // Left Arrow
        this.arrowL.addEventListener('click', () => {
            this.carouselItems[this.counter].deselect();
            this.counter--;
            if (this.counter === -1) this.counter = 2;
            this.updateActive(this.counter);
        })

        // Right Arrow
        this.arrowR.addEventListener('click', (event) => {
            this.carouselItems[this.counter].deselect();
            this.counter++;
            if (this.counter === 3) this.counter = 0;
            this.updateActive(this.counter);
         })

      }
    
      updateActive(data) {
        this.carouselItems[data].select();
      }
    

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
