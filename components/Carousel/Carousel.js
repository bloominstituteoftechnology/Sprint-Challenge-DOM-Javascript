class Carousel {
	constructor(element) {
		this.element = element;
		this.leftArrows = element.querySelectorAll(".Carousel__arrow-left");
		this.leftArrows = Array.from(this.leftArrows).map((arrow) => {
			return new CarouselArrowLeft(arrow, this);
		});
		this.rightArrows = element.querySelectorAll(".Carousel__arrow-right"); 
		this.rightArrows = Array.from(this.rightArrows).map((arrow) => {
			return new CarouselArrowRight(arrow, this);
		})
		this.activeItem = this.rightArrows[0];
		this.init();
	}

	init() {
		this.rightArrows[0].select();
	}

	updateActive(newActive) {
		this.activeItem.deselect();
		this.activeItem = newActive;
	}

	getTab(data) {
		return this.element.querySelector('Carousel__item-focused');
	}

}

class CarouselItem {

}

class CarouselArrowLeft {

}

class CarouselArrowRight {

}


let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));