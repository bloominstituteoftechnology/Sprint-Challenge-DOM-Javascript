class CarItem {
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
        this.activeItem = 0;

        // Attaches items
        this.items = element.querySelectorAll(".Carousel__item");
        this.totalItems = Array.from(this.items).length;
        this.items = Array.from(this.items).map(item => new CarItem(item));

        // Listens for a click event on navigation arrows
        this.navs = document.querySelectorAll(".Carousel__arrow-right, .Carousel__arrow-left")
        this.navs.forEach((x) => {
            x.addEventListener('click', (event) => {
                    this.updateActive(event.target.className);
            })
        });
    }

    updateActive(direction) {
        if (direction === null) return;
        this.items[this.activeItem].deselect();

        if (direction === "Carousel__arrow-right") {
            if (this.activeItem === this.totalItems - 1) {
            this.items[0].select();
            this.activeItem = 0;
            } else {
            this.items[this.activeItem + 1].select();
            this.activeItem++;
            }
        }

        if(direction === "Carousel__arrow-left") {
            if (this.activeItem === 0) {
            this.items[this.totalItems - 1].select();
            this.activeItem = this.totalItems - 1;
            } else {
                this.items[this.activeItem - 1].select();
                this.activeItem--;
                }
        }
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));