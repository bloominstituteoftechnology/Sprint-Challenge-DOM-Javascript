// describes each carousel item
class CarouselItem {
	constructor(element) {
		// store the carousel item
		this.element = element;
	}
	// Prototype Methods
	// when an arrow is clicked, hide current slide item
	hide() {
		this.element.classList.remove('Carousel__item-focused');
	}
	// when an arrow is clicked, show the new slide
	show() {
		this.element.classList.add('Carousel__item-focused');
	}
}

// describes carousel as a whole
// contains information about each carousel item
// controls the carousel right and left arrows 
class Carousel {
	constructor(element) {
		// store the carousel div
		this.element = element;
		// store right arrow
		this.rightArrow = document.querySelector('.Carousel__arrow-right');
		// store left arrow
		this.leftArrow = document.querySelector('.Carousel__arrow-left');
		// add an event listener to the right arrow
		document.querySelector('.Carousel__arrow-left').addEventListener('click', this.previousSlide());
		// add an event listener to the left arrow
		document.querySelector('.Carousel__arrow-right').addEventListener('click', this.nextSlide());
		// store reference to all carousel items
		this.items = document.querySelectorAll('.Carousel__item');
		// stores all instances of CarouselItem
		this.items = Array.from(this.items).map((item) => new CarouselItem(item));
		// reference the first carousel item
		this.activeIndex = 0;
		// show the first slide
		this.init();
	}
	// Prototype Methods
	// show the first active item on page load
	init() {
		this.items[this.activeIndex].show();
	}
	// update the current active item via the activeIndex
	updateActive() {

	}
	// hides the current slide and displays the previous slide
	previousSlide() {
		document.querySelector('.Carousel').style.backgroundColor = 'red';
	}
	// hides the current slide and displays the next slide
	nextSlide() {
		document.querySelector('.Carousel').style.backgroundColor = 'blue';
	}
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));