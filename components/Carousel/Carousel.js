class Carousel {
    constructor(element) {
        this.element = element;

        this.slides = element.querySelectorAll(".Carousel__item");
        this.slides = Array.from(this.slides);
        this.index = 0;
        this.active = this.slides[this.index];
    

        this.controlRight = element.querySelector(".Carousel__arrow-right");
        this.controlRight.addEventListener("click", () => {
            this.active.classList.remove(".Carousel__item-focused");
            if (this.index < this.slides.length) {
               this.active = this.slides[this.index ++];
                console.log(this.index);
                console.log(this.active);
                // this.active.classList.add(".Carousel__item-focused");
                console.log("clickR"); 
            }
            else {
                this.active = this.slides[0];
            }
            
        });

        this.controlLeft = element.querySelector(".Carousel__arrow-left");
        this.controlLeft.addEventListener("click", () => {
            console.log("clickL");
        });
    }
}



let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));