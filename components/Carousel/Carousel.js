class CarouselItem {
	constructor(element) {
		this.element = element;
	}

	identity() {
		return this.element
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
		// console.log(this.element.dataset.arrow);
		this.element.addEventListener('click', (event) => {
			event.direction = this.element.dataset.arrow
		});
	}
}

class Carousel {
	constructor(element) {
		this.element = element;

		this.arrows = [];
		this.arrows.push(new CarouselArrow(this.element.querySelector(".Carousel__arrow-left")));
		this.arrows.push(new CarouselArrow(this.element.querySelector(".Carousel__arrow-right")));

		this.items = element.querySelectorAll(".Carousel__item");
		this.items = Array.from(this.items).map((item) => {
			return new CarouselItem(item);
		});
		console.log(this.items);

		this.element.addEventListener('click', (event) => {
			// console.log(event.direction);
			this.updateCarousel(event.direction);
			// event.stopPropogation();
		});

		this.init();
	}

	init() {
		this.activeItem = document.querySelector(".Carousel__item-focused");
		this.items.forEach((item) => {
			if (item.identity() === this.activeItem) {
				item.select();
				this.activeItem = item;
			}
		});
	}

	updateCarousel(direction) {
		let index = this.findIndex();
		if (direction === 'l') {
			if (index === 0) index = this.items.length - 1;
			else index--;
		} else {
			if (index === this.items.length - 1) index = 0;
			else index ++;
		}

		this.activeItem.deselect();
		this.activeItem = this.items[index];
		this.activeItem.select();
	}

	findIndex() {
		for (let i = 0; i < this.items.length; i++) {
			if (this.items[i] === this.activeItem) return i;
		}
	}
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));