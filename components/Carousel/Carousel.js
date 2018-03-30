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
		// this.init();
		// add an event listener to the right arrow
		this.rightArrow.addEventListener('click', this.updateIndex(1));
		// add an event listener to the left arrow
		this.leftArrow.addEventListener('click', this.updateIndex(-1));
	}
	// Prototype Methods
	// show the first active item on page load
	init() {
		this.items[this.activeIndex].show();
	}

	updateIndex(n) {
		console.log(this.activeIndex);
		this.showSlide(this.activeIndex += n);
	}

	// hides the current slide and displays the previous slide
	showSlide(num) {
		console.log('you made it here');
		if (num < 0) {
			this.activeIndex = this.items.length -1;
			// console.log(this.activeIndex);
		} else if (num > this.items.length) {
			this.activeindex = 0;
			// console.log(this.activeIndex);
		}
		this.items.forEach((item) => item.hide());
		console.log(this.items);
		this.items[num].show();
	}
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
// console.log(carousels);
