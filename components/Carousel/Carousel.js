class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.itemList = Array.from(carousel.querySelectorAll('.Carousel__item'));
        this.current = this.itemList.shift();
    }
    
    prev() {
        this.current.classList.remove('Carousel__item-focused');
        const temp = this.current;
        this.current = this.itemList.shift();
        this.current.classList.add('Carousel__item-focused');
        this.itemList.push(temp);
    }
    
    next() {
        this.current.classList.remove('Carousel__item-focused');
        const temp = this.current;
        this.current = this.itemList.pop();
        this.current.classList.add('Carousel__item-focused');
        this.itemList.unshift(temp);
        
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));