class CarouselArrow {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', (event) => {
            event.arrows = this.element.dataset.arrow;
        });
    }
}

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

class Carousel {
    constructor(element) {
        this.element = element;
        this.items = this.element.querySelectorAll(".Carousel__item");
        this.items = Array.from(this.items).reduce((obj, item) => {
            obj[item.dataset.num] = new CarouselItem(item);
            return obj;
          }, {});

        this.element.addEventListener('click', (event) => {
            if (event.arrows) {
                this.updateActive(event.arrows);
                event.stopPropagation(); 
            }
        });

        this.activeData = this.element.querySelector('.Carousel__item-focused');
        this.activeData = this.activeData ? this.activeData.dataset.num : null;
        this.updateActive(this.activeData);
    }

    updateActive(data) {
        if (data === null) return;
        this.items[this.activeData].deselect();
    
        this.items[data].select();
        this.activeData = data;
    }
}

let carousels = document.querySelectorAll('.Carousel');
carousels = Array.from(carousels).map(carousels => new Carousel(carousels));
