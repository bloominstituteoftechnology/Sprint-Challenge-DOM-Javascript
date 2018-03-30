/* PLAN OF ATTACK********************************************************************************************************
we pass in the .Carousel class into the constructor as an array,
when assign the carousel
when we click the button think there should be a different function fired for each button.
one decrements a counter and one increments it.
inside the decrements function there should have an if statment,
inside of the argument for the if it should see if the counter is -1 if the counter is then it should just set it to 2,
so then it will grab the last index in the array.
there needs to be a set data that so we can use the counter with coercion to add the current counter number so it will select that one.
*/





class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
    
       
        this.arrows = carousel.querySelector('.Carousel__arrow');
        console.log(this.arrow);
        this.arrows = Array.from(this.arrows).reduce((obj, arrows) => {
          //obj[arrow.dataset.tab] = new TabLink(arrow);
          //return obj;
        });
}
}
let carousels = document.querySelectorAll(".Carousel");
console.log(document.querySelectorAll(".Carousel"));
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));