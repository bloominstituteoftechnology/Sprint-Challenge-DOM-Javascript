// describes each carousel item
class CarouselItem {
	constructor() {

	}
	// Prototype Methods

}

// describes carousel as a whole
// contains information about each carousel item
// controls the carousel right and left arrows 
class Carousel {
	constructor() {

	}
	// Prototype Methods

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));