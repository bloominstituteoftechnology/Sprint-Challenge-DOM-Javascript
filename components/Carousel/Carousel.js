class CarouselItem {
    constructor(element, parent) {
        this.element = element;
        this.box = parent;
        this.dataBox = this.box.dataCar(this.element.dataset.info);
        this.arrowleft = new Carousel(this.carousel);
        this.element.addEventListener('click', () => {this.dataBox})
    }
    
    select() {
        this.element.classList.add('Carousel__items--selected');
    }

    deselect() {
        this.element.classList.remove('Carousel__items--selected');
    }
}


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
    
    dataCar(data) {
        return this.element.querySelector(`.Carousel__item[data-box="${data}"]`);
    }
    
}



let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));