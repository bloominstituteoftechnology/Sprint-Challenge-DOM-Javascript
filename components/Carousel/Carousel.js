class Item {
    constructor(element) {
        this.element = element;
    }
}


class RightLink {
    constructor(element, parent){
      this.element = element;
      this.carousels = parent;
      this.carouselItem = parent.getItem(this.element.dataset.item);
      this.carouselItem = new Item(this.carouselItem);

    }
}

class LeftLink {
    constructor(element, parent){
      this.element = element;
      this.carousels = parent;
    //   this.carouselItem = parent.getItem(this.element.dataset.item);
    //   this.carouselItem = new Item(this.carouselItem);

    }
}

class Carousel {
    constructor(element){
      this.element = element;
      this.rightLink = element.querySelector(".Carousel__arrow-right");
      this.rightLink = new RightLink(this.rightLink, this);
      this.leftLink = element.querySelector(".Carousel__arrow-left");
      this.leftLink = new LeftLink(this.leftLink, this);
      
    }
    getItem(data) {
        return this.element.querySelector(`.Carousel__item[data-item="${data}"]`);
      }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
console.log(carousels);


