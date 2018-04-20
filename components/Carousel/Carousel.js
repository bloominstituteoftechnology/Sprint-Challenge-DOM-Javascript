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


let slideBoxes = document.getElementsByClassName('Carousel__item');
let left = document.getElementsByClassName('Carousel__arrow-left')[0];
let right = document.getElementsByClassName('Carousel__arrow-right')[0];

const slideOperatorRight = function() {
    //start with the ifs and toggle Carousel__item-focused

       if (slideBoxes[0].classList.contains('Carousel__item-focused')) {
           slideBoxes[0].classList.toggle('Carousel__item-focused');
           slideBoxes[1].classList.toggle('Carousel__item-focused');
           // console.log('slide 2 should be up now');
           return;
       }
       if (slideBoxes[1].classList.contains('Carousel__item-focused')) {
           slideBoxes[1].classList.toggle('Carousel__item-focused');
           slideBoxes[2].classList.toggle('Carousel__item-focused');
           // console.log('slide 3 should be up now');
           return;
       }
       if (slideBoxes[2].classList.contains('Carousel__item-focused')) {
           slideBoxes[2].classList.toggle('Carousel__item-focused');
           slideBoxes[0].classList.toggle('Carousel__item-focused');
           // console.log('slide 1 should be up now');
           return;
       }

}

const slideOperatorLeft = function() {
    //start with the ifs and toggle Carousel__item-focused

       if (slideBoxes[0].classList.contains('Carousel__item-focused')) {
           slideBoxes[0].classList.toggle('Carousel__item-focused');
           slideBoxes[2].classList.toggle('Carousel__item-focused');
           // console.log('slide 3 should be up now');
           return;
       }
       if (slideBoxes[2].classList.contains('Carousel__item-focused')) {
           slideBoxes[2].classList.toggle('Carousel__item-focused');
           slideBoxes[1].classList.toggle('Carousel__item-focused');
           // console.log('slide 2 should be up now');
           return;
       }
       if (slideBoxes[1].classList.contains('Carousel__item-focused')) {
           slideBoxes[1].classList.toggle('Carousel__item-focused');
           slideBoxes[0].classList.toggle('Carousel__item-focused');
           // console.log('slide 1 should be up now');
           return;
       }

}


// console.log(left);
// console.log(right);


// for (let i = 0; i < slideBoxes.length; i++) {
//     //buttons[i].addEventListener('click', hider);
//     console.log(slideBoxes[i]);
// }


left.addEventListener('click', slideOperatorLeft);
right.addEventListener('click', slideOperatorRight);