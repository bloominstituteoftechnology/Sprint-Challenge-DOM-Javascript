
class CarouselItem {
        constructor(element) {
            this.element = element;
        }
        showItem(n) {
            let slideIndex = 1;
            let slide = this.element.classList.add(".Carousel__item-focused");
            if (n > slide.length) slideIndex = 1;
            if (n<1) slideIndex = slide.length;
            for (let i = 0; i < slide.length; i++) {
                slide[i].style.display = "none";
            }
            slide[slideIndex-1].style.display = "block"
        }
    }
     class CarouselArrow {
        constructor(element) {
            this.element = element;
            this.items = element.querySelectorAll(".Carousel__item");
            this.items = Array.from(this.items).reduce((obj, item) => {
                obj[item.dataset.carousel] = new CarouselItem(item);
                return obj;
            }, {});
        }
        rotateRight(slide) {
           let slideIndex =1;
           this.items.showItem(slideIndex += slide);
        }
        currentSlide(slide) {
            let slideIndex;
            this.items.showItem(slideIndex = n);
        }
    }
    class Carousel {
        constructor(element) {
            this.element = element;
            this.slideR = element.querySelectorAll(".Carousel__arrow-left");
            this.slideL = element.querySelctorAll(".Carousel__arrow-right");
    }
    

    }


let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

