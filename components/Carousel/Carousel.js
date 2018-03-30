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


class Carousel {
	constructor(element) {
		this.element = element;
		this.position = 0;
		this.items = element.querySelectorAll(".Carousel__item");
		this.items = Array.from(this.items).map((item) => new CarouselItem(item));
		this.rightArrow = element.querySelector(".Carousel__arrow-right");
		this.leftArrow = element.querySelector(".Carousel__arrow-left");
		this.init();
	}

	init() {
		this.leftButtonListener();
		this.rightButtonListener();
	}

		rightButtonListener() {
		this.rightArrow.addEventListener("click", () => {
			this.items[this.position].deselect();
			this.position++;
			if (this.position > 2) this.position = 0;
			this.items[this.position].select();
		})

	}

	leftButtonListener() {
		this.leftArrow.addEventListener("click", () => {
			this.items[this.position].deselect();
			this.position--;
			if (this.position <0) this.position = 2;
			this.items[this.position].select();
		})

	}

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));