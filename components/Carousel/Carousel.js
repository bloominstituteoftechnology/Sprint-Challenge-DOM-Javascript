class Carousel {
    constructor(element) {
        this.element = element;
        console.log('this is the element passed to constructor: ', this.element);
        let carouselItems = this.element.querySelectorAll('.Carousel__item');
        console.log('Found carouselItems: ', carouselItems);
        console.log('First carousel box: ', carouselItems[0]);
        carouselItems = Array.from(carouselItems);
        //console.log('First carousel box: ', carouselBoxes[0]);
    }
}




let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
//console.log(carousels[0]);