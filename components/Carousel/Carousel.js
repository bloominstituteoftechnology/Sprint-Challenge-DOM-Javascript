class Carousel {
	constructor(element) {
		this.element = element;
		this.arrows = this.element.querySelectorAll(".Carousel__arrow");
		this.counter = 0;
		this.box = new Box(this.element);
		Array.from(this.arrows).forEach((arrow) => {
			arrow.addEventListener('click', () => {
				let previousCounter = this.counter;
				if (arrow.classList.contains("Carousel__arrow-left")) {
					console.log('left arrow clicked');
					this.counter--;
				}
				if (arrow.classList.contains("Carousel__arrow-right")) {
					console.log('right arrow clicked');
					this.counter++;
				};
				if (this.counter === -1) {
				this.counter = 2;
				}
				if (this.counter === 3) {
				this.counter = 0;
				}
				this.box.select(this.counter);
				this.box.deselect(previousCounter);
			});
		});
	}
}

class Box {
	constructor(element) {
		this.element = element;
		this.box = element.querySelectorAll(".Carousel__item");
	}

	select(counter) {
		Array.from(this.box)[counter].classList.add("Carousel__item-focused");
	}

	deselect(previousCounter) {
		Array.from(this.box)[previousCounter].classList.remove("Carousel__item-focused");
	}


}



let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));