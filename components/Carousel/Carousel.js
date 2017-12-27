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

class CarouselArrow {
	constructor(element) {
		this.element = element;

		this.element.addEventListener('click', (event) => {
			event.direction = this.element.dataset.arrow
		});
	}
}

class Carousel {
	constructor(element) {
		this.element = element;
		this.arrows = [];
		this.items = [];
		this.activeItem;

		this.element.addEventListener('click', (event) => {
			if (event.direction) this.updateCarousel(event.direction);
			event.stopPropagation();
		});

		this.init();
	}

	init() {
		this.arrows.push(new CarouselArrow(this.element.querySelector(".Carousel__arrow-left")));
		this.arrows.push(new CarouselArrow(this.element.querySelector(".Carousel__arrow-right")));

		this.items = this.element.querySelectorAll(".Carousel__item");
		this.items = Array.from(this.items).map((item) => {
			return new CarouselItem(item);
		});

		this.activeItem = document.querySelector(".Carousel__item-focused");
		this.items.forEach((item) => {
			if (item.element === this.activeItem) {
				item.select();
				this.activeItem = item;
			}
		});
	}

	updateCarousel(direction) {
		this.activeItem.deselect();
		this.activeItem = this.items[this.newIndex(direction)];
		this.activeItem.select();
	}

	newIndex(direction) {
		let currentIndex = 0;
		for (let i = 0; i < this.items.length; i++) {
			if (this.items[i] === this.activeItem) currentIndex = i;
		}

		if (direction === 'l') {
			if (currentIndex === 0) return this.items.length - 1;
			else return --currentIndex;
		} else {
			if (currentIndex === this.items.length - 1) return 0;
			else return ++currentIndex;
		}
	}
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));