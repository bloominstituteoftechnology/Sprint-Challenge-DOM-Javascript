class Carousel {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.add("Carousel__item");
    }

    deselect() {
        this.element.classList.remove("Carousel__item");
      }
}

class CarouselArrows {
    constructor(element) {
        this.element = element;
        this.element.addEventListener = ('click', event => {

        })
    }
   

}

  

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));