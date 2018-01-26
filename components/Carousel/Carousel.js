// Your challenge is to write the functionality of a *Carousel* component. You have the HTML and CSS already in place.

// What is a carousel component? Something that allows multiple pieces of content to occupy a single, coveted space.

// What do they want us to do? The carousel component on `index.html` isn't working. All they want is for you to add functionality that would make it work.

// What does it need to work? I'm assuming that in order to do this, I will need to add an event listener that awaits a click on one of the arrows and will show the appropriate box.

// Where are these arrows? Each arrow is in a class ".Carousel__arrow-left" and ".Carousel__arrow-right".

// How do you listen for a click event? It took we a while to figure it out, but after going through `Tabs.js` I found out that I need to write
// ```
// this.element.addEventListener('click', (event) => {
//   --- do something ---
// });
// ```

// For me to make this event work, I'll have to tell JavaScript which box I'm currently looking at (and then change it once I click on the link)... How do you do that?

// Ok, after looking around I think that the item I'm currently looking at will gain the css properties of `.Carousel__item-focused` (the tabs exercise version of this was `.Tabs__item--selected`)

// John just told us this page isn't even referenced??? Wtf! As if this assignment isn't hard enough.

// Ok I fxed that.

// Another problem, the carousel items were not all inside of the `.Carousel__items` class. I just fixed that too.

class Carousel {
  constructor(element) {
    this.element = element; // This allows us to play with the element using `this`. Truth be told, I have no idea why we do this. But I might find out before this exercise is over.
  }
}

class CarouselItem {
  constructor(element) {
    this.element = element;
  }
}

// I think I have to create a class for each arrow, otherwise how can I access them? Let's see how this goes.

class ArrowLeft {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', (event) => {
      console.log('testing'); // I am testing to see if clicking on the arrow works. It doesn't. I'm not sure what I'm doing wrong. Hmm...
    });
  }
}

const leftArrow = document.getElementsByClassName('.Carousel__arrow-left');


leftArrow.addEventListener("click", console.log('boom'));
// I am still testing to see if I can add an event listener. However the error I'm getting is 'Uncaught TypeError: leftArrow.addEventListener is not a function'. Why is that???
// Apparently it's because I'm executing the script before the HTML loads. Let's see...


class ArrowRight {
  constructor(element) {
    this.element = element;
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
