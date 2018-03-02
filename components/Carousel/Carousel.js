class Carousel {
    constructor(carousel){
        this.carousel = carousel; // there is no connection between the passed object and the function appear().
        this.appear();  
    }


    appear(){
     /*    const carouselItem = document.getElementsByClassName('Carousel__item');
        const arrowRight = document.getElementsByClassName('Carousel__arrow-right');
        const arrowLeft = document.getElementsByClassName('Carousel__arrow-left'); */
        const carouselItems = this.carousel.getElementsByClassName('Carousel__item');
        const arrowRight = this.carousel.getElementsByClassName('Carousel__arrow-right');
        const arrowLeft = this.carousel.getElementsByClassName('Carousel__arrow-left');

        Array.from(arrowRight).forEach(arrow => {
            arrow.addEventListener('click', () => {
                Array.from(carouselItems).forEach(item => {
                    item.classList.add('Carousel__item-focused');
                });
            });
        });

        Array.from(arrowLeft).forEach(arrow => {
            arrow.addEventListener('click', () => {
                Array.from(carouselItems).forEach(item => {
                    item.classList.add('Carousel__item-focused');
                });
            });
        });
    } // end of appear()//#################################################
} // end of Button class #################################################################################


let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));