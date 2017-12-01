class Carousel {

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

//add event listener to the arrows
//add event to change the display for the Carousel__item
//CSS animation event on the items to move them out of the screen
//