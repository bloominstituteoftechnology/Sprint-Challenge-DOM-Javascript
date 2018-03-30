class Carousel {
    constructor(element) {
        this.element = element;
        this.items = element.querySelectorAll (".Carousel__items");
        this.items = Array.from(this.items).map((item)=> {return new CarouselItem(item, this);
        });
        this.activeItem = this.items[0];
        this.in();
    }

    in() {
        this.activeItem.select();
    }

    update(newUpdate) {
        this.activeItem.deselect();
        this.activeItem = newUpdate;
        this.activeItem.select();
    }

    select() {
        this.element.classList.add('Carousel__items--selected');
    }

    deselect() {
        this.element.classList.remove('Carousel__items--selected');
    }
    
    dataCar(data) {
        return this.element.querySelector(`.Carousel__item[data-box="${data}"]`);
    }
    
}

class Box {
    constructor(element, parent) {
        this.element = element;
        this.box = parent;
        this.dataBox = this.element.dataset.box;
        this.carousel = new Carousel(this.carousel);
        this.element.addEventListener('click', () => {this.dataBox})
    }
}


let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));