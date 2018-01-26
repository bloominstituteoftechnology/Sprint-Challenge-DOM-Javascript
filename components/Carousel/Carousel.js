// class CarouselItem {
//     constructor(element) {  // completely lost
//       this.element = element;
//     }

//     select() {
//       this.element.classList.add("Carousel__item--selected");
//     }

//     deselect() {
//       this.element.classList.remove("Carousel__item--selected");
//     }
//   }

//   class CarouselLink {
//     constructor(element) {
//       this.element = element;
//       this.element.addEventListener('click', (event) => {
//         event.carouselData = this.element.dataset.slide;
//       });
//     }

//     select() {
//       this.element.classList.add("Carousel__link--selected");
//     }

//     deselect() {
//       this.element.classList.remove("Carousel__link--selected");
//     }
//   }

//   class Carousel {
//     constructor(element) {
//       this.element = element;

//       this.links = element.querySelectorAll(".Carousel__link");
//       this.links = Array.from(this.links).reduce((obj, link) => {
//         obj[link.dataset.slide] = new CarouselLink(link);
//         return obj;
//       }, {});

//       this.items = element.querySelectorAll(".Carousel__item");
//       this.items = Array.from(this.items).reduce((obj, item) => {
//         obj[item.dataset.slide] = new CarouselItem(item);
//         return obj;
//       }, {});

//       this.element.addEventListener('click', (event) => {
//         if (event.carouselData) {
//          this.updateActive(event.carouselData);
//          event.stopPropagation();
//         }
//       });

//       this.activeData = element.querySelector(".Carousel__default");
//       this.activeData = this.activeData ? this.activeData.dataset.slide : null;
//       this.updateActive(this.activeData);
//     }

//     updateActive(data) {
//       if (data === null) return;
//       this.links[this.activeData].deselect();
//       this.items[this.activeData].deselect();

//       this.links[data].select();
//       this.items[data].select(); // remember this
//       this.activeData = data;
//     }

//   }

class Carousel {
    constructor(element) {
        this.element = element;
        this.slide = 1;

        this.arrows = element.querySelectorAll('.Carousel__link');
        this.arrows = Array.from(this.arrows).reduce((obj, arrow) => {
            obj[arrow.dataset.dir] = new CarouselLink(arrow);
            return obj;
        }, {});
        this.items = element.querySelectorAll('.Carousel__item');
        this.items = Array.from(this.items).reduce((obj, item) => {
            obj[item.dataset.slide] = new CarouselItem(item);
            return obj;
        }, {});

        this.element.addEventListener('click', (event) => {
            console.log('what');
            if (event.carouselData) {
                console.log('why isnt this calling');
                this.updateActive(event.carouselData);
                event.stopPropagation();
            }
        });

        this.activeData = element.querySelector('.Carousel__default');
        this.activeData = this.activeData ? this.activeData.dataset.slide : null;
        this.defaultActive(this.activeData);
    }

    updateActive(data) {  // the ugliest and most naive function imaginable
        console.log('its getting to update');
        if (this.slide === 1) {
            if (data === '1') {
                this.slide = 3;
                console.log(this.slide);
                this.items[1].deselect();
                this.items[2].deselect();
                this.items[this.slide].select()

                return;

            } else if (data === '2') {  // literally the hackiest solution possible, i just want it working (only the left does for some reason)
                this.slide = 2;
                this.items[1].deselect();
                this.items[3].deselect();
                this.items[this.slide].select()

                return;

            }
        }
        if (this.slide === 2) {
            if (data === '1') {
                this.slide = 1;
                this.items[2].deselect();
                this.items[3].deselect();
                this.items[this.slide].select()

                return;

            } else if (data === '2') { // this also doesnt scale by number of items, whatever
                this.slide = 3;
                this.items[1].deselect();
                this.items[2].deselect();
                this.items[this.slide].select()

                return;

            }
        }
        if (this.slide === 3) {
            if (data === '1') {
                this.slide = 2;
                this.items[3].deselect();
                this.items[1].deselect();
                this.items[this.slide].select()

                return;

            } else if (data === '2') {
                this.slide = 1;
                this.items[2].deselect();
                this.items[3].deselect();
                this.items[this.slide].select()
                return;

            }
        }
        console.log(data);
        this.activeData = data;
    }

    defaultActive(data) {
        if (data === null) {
            this.items[this.activeData].deslect();
        }
        this.items[1].select();
        this.activeData = data;

    }

}
class CarouselLink {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', (event) => {
            event.carouselData = this.element.dataset.dir;
        });
    }
}
class CarouselItem {
    constructor(element) {
        this.element = element
    }

    select() {
        console.log('its getting here');
        this.element.classList.add('Carousel__item--focused');
    }
    deselect() {
        this.element.classList.remove('Carousel__item--focused');
    }
}


let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));