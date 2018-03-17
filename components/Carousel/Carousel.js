class CarouselItem {
    constructor(element){
        this.element = element;
    }

    select() {
        // should use classList
        this.element.classList.add("Carousel__item-focused");
        }

    deselect() {
        // should use classList
        this.element.classList.remove("Carousel__item-focused");
    }
}

class Carousel {
    constructor(element){
        this.element = element;
        this.right = element.querySelector('.Carousel__arrow-right');
        this.left = element.querySelector('.Carousel__arrow-left');
        this.carouselItem = element.querySelectorAll('.Carousel__item');
        this.carouselItem = Array.from(this.carouselItem).map((item) => {
            return new CarouselItem(item);
        });
        
        this.right.addEventListener('click', () => {
            this.next();
        })
        this.left.addEventListener('click', () => {
            this.previous();
        })
    }

    next(){
        this.carouselItem.classList.remove('')
        console.log("rigth")
    }

    previous(){
        console.log("left")
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
console.log(carousels);
