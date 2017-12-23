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

	getCarousel(data) {
		return this.element.querySelector('Carousel__item-focused');
	}
}

class CarouselItem {
	constructor(element) {
		this.element = element;
	}

	select() {
		this.element.classList.add("Carousel__item-focused");
	}

	deselect() {
		this.element.classList.remove("Carousel__item-focused");
	}
}

class CarouselArrowLeft {
	constructor(element, parent) {
		this.element = element;
		this.carousels = parent;
		this.carouselItem = parent.getCarousel(this.element.dataset.carousel);
		this.carouselItem = new CarouselItem(this.carouselItem);
		this.element.addEventListener('click', () => {
			this.carousels.updateActive(this);
			this.select();
		});
	}

	select() {
		this.element.classList.add("Carousel__item-focused");
		this.carouselItem.select();
	}

	deselect() {
		this.element.classList.remove("Carousel__item-focused");
		this.carouselItem.deselect();
	}
}

class CarouselArrowRight {
	constructor(element, parent) {
		this.element = element;
		this.carousels = parent;
		this.carouselItem = parent.getCarousel(this.element.dataset.carousel);
		this.carouselItem = new CarouselItem(this.carouselItem);
		this.element.addEventListener('click', () => {
			this.carousels.updateActive(this);
			this.select();
		});
	}

	select() {
		this.element.classList.add("Carousel__item-focused");
		this.carouselItem.select();
	}

	deselect() {
		this.element.classList.remove("Carousel__item-focused");
		this.carouselItem.deselect();
	}
}


let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));