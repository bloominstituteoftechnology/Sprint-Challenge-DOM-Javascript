// class Carousel {


// }

// let carousels = document.querySelectorAll(".Carousel");
// carousels = Array.from(carousels).map(carousel => new Carousel(carousel));




/* target the arrows with a click event have 2 functions 
use if statement in a loop to find wich element does not have 
the display none on it assign that number to a variable and use
that variable with a set of if statements to determin wich slide
to unhide next and wich one to hid each if should hide itself
and unhid the next slide */


let slideBoxes = document.getElementsByClassName('Box');




for (let i = 2; i < slideBoxes.length; i++) {
    //buttons[i].addEventListener('click', hider);
    console.log(slideBoxes[i]);
}