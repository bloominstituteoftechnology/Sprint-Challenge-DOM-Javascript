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
		// console.log(this.rightArrow);
		// store left arrow
		this.leftArrow = document.querySelector('.Carousel__arrow-left');
		// console.log(this.leftArrow);
		// store reference to all carousel items
		this.items = document.querySelectorAll('.Carousel__item');
		// stores all instances of CarouselItem
		this.items = Array.from(this.items).map((item) => new CarouselItem(item));
		// console.log(this.items);
		// console.log(this.items.length);
		// reference the first carousel item
		this.activeIndex = 0;
		// show the first slide
		this.init();
		// add an event listener to the right arrow
		document.querySelector('.Carousel__arrow-left').addEventListener('click', this.previousSlide());
		// add an event listener to the left arrow
		document.querySelector('.Carousel__arrow-right').addEventListener('click', this.nextSlide);
	}
	// Prototype Methods
	// show the first active item on page load
	init() {
		this.items[this.activeIndex].show();
	}

	updateActive(newActive) {
    	// deselect the old active slide item
    	// assign the new active slide index
    	this.items[this.activeIndex].hide();
    	this.items[this.activeIndex] = newActive;
 	 }

	// hides the current slide and displays the previous slide
	previousSlide() {
		// console.log(this.items[this.activeIndex]);
		this.items[this.activeIndex].hide();
		// decrement index to go to a previous slide
		// this.activeIndex--;
		// // console.log(this.activeIndex);
		// if (this.activeIndex < 0) {
		// 	this.activeIndex = this.items.length - 1;
		// 	// console.log(this.activeIndex);
		// } else if (this.activeIndex > this.items.length) {
		// 	this.activeindex = 0;
		// 	// console.log(this.activeIndex);
		// }
		// this.items[this.activeIndex].show('Carousel__item-focused');
	}
	// hides the current slide and displays the next slide
	nextSlide() {
		
	}
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
// console.log(carousels);
