/*
    I've been lost in general this week.  Seemed like everything I thought I understood I most definitely did not...
    I would normally have asked questions this week, but it is hard when you don't even know what to ask or how to ask it...
    I know this only partially works at all if there are only three items revolving, no idea how to do it otherwise...
*/

class Carousel {
    constructor (element){
        this.element = element;
    
        this.left = Array.from(this.element.querySelectorAll(".Carousel__arrow-left"));
        
        this.right = Array.from(this.element.querySelectorAll(".Carousel__arrow-right"));
        this.items = this.element.querySelectorAll(".Carousel__item");
        this.items = Array.from(this.items).map(item => new CarouselItem(item));

        this.focused = this.element.querySelector(".Carousel__item-focused");
        
        this.left[0].addEventListener('click', (event) => {
            this.updateActiveLeft();
        })
        this.right[0].addEventListener('click', (event) => {
            this.updateActiveRight();
        })
    }

    // I know this is a crap way to do this, especially since it only "works" once right and once left
    // but this was the closest I could get to any functionality whatsoever.
    // I assume this should be in the constructor for the items (well, I know it shouldn't be in the file at all)
    // But then again I don't even know if those are correct or lacking...
    // I also assume like tabs there is probably another constructor I need...
    updateActiveLeft() {
        if (this.focused === this.items[0].element) {
            this.items[0].deselect();
            this.items[2].select();
        }
        if (this.focused === this.items[1].element) {
            this.items[1].deselect();
            this.items[0].select();
        }
        if (this.focused === this.items[2].element) {
            this.items[2].deselect();
            this.items[1].select();
        }
    }

    updateActiveRight() {
        if (this.focused === this.items[0].element) {
            this.items[0].deselect();
            this.items[1].select();
        }
        if (this.focused === this.items[1].element) {
            this.items[1].deselect();
            this.items[2].select();
        }
        if (this.focused === this.items[2].element) {
            this.items[2].deselect();
            this.items[0].select();
        }
    }
}

class CarouselItem {
    constructor (element){
        this.element = element;
    }

    select() {
        this.element.classList.add("Carousel__item-focused");
      }
    
      deselect() {
        this.element.classList.remove("Carousel__item-focused");
      }
}

// Nodelist of nods in Carousel class
let carousels = document.querySelectorAll(".Carousel");
// Array of nodelist, passed into map
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));