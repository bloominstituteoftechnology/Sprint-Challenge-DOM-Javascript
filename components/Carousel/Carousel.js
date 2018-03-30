// describes each carousel item
class CarouselItem {
	constructor(element) {
		// store the carousel item
		this.element = element;
	}
	// Prototype Methods
	// when an arrow is clicked, hide current slide item
	hide() {

	}
	// when an arrow is clicked, show the new slide
	show() {

	}

}

// describes carousel as a whole
// contains information about each carousel item
// controls the carousel right and left arrows 
class Carousel {
	constructor(element) {
		// store the carousel div
		this.element = element;
		// add an event listener to the right arrow
		document.querySelector('.Carousel__arrow-left').addEventListener('click', () => previousSlide());
		// add an event listener to the left arrow
		document.querySelector('.Carousel__arrow-right').addEventListener('click', () => nextSlide());
		// store reference to all carousel items
		this.items = document.querySelectorAll('.Carousel__item');
		// stores all instances of CarouselItem
		this.items = Array.from(this.items).map((item) => new CarouselItem(item));
	}
	// Prototype Methods
	// hides the current slide and displays the previous slide
	previousSlide() {

	}
	// hides the current slide and displays the next slide
	nextSlide() {

	}
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));