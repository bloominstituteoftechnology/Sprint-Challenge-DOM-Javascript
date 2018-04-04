class CarouselItem {
    constructor(element) {
        this.element = element;
    }
    select() {
        this.element.classList.add("Carousel_item-selected");
    }

    deselect() {
        this.element.classList.remove("Carousel__item-selected");
    }
}

class CarouselLink {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', (event) => {
            event.carouselData = this.element.dataset.carousel;
        });
    }

    select() {
        this.element.classList.add("Carousel__link-selected");
    }

    deselect() {
        this.element.classList.remove("Carousel__link-selected");
    }
}

class Carousels {
    constructor(element) {
        this.element = element;

        // Attaches links with data-carousel value as property
        this.links = element.querySelectorAll(".Carousels__link");
        this.links = Array.from(this.links).reduce((obj, link) => {
            obj[link.dataset.carousel] = new CarouselLink(link);
            return obj;
        }, {});

        // Attaches items with data-carousel value as property
        this.items = element.querySelectorAll(".Carousels__item");
        this.items = Array.from(this.items).reduce((obj, item) => {
            obj[item.dataset.carousel] = new CarouselItem(item);
            return obj;
        }, {});

        // Listens for a click event in its children or self
        this.element.addEventListener('click', (event) => {
            if (event.carouselData) {
                this.updateActive(event.carouselData);
                event.stopPropagation();
            }
        })

        this.activeData = element.querySelector(".Carousels__default");
        this.activeData = this.activeData ? this.activeData.dataset.carousel : null;
        this.updateActive(this.activeData);
    }

    updateActive(data) {
        if (data === null) return;
        this.links[this.activeData].deselect();
        this.items[this.activeData].deselect();

        this.links[data].select();
        this.items[data].select();
        this.activeData = data;
    }

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));