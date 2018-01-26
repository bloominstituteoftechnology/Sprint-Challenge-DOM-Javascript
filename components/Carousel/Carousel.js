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
    this.items = element.querySelectorAll(".Carousel__items");
    this.items = Array.from(this.items).map(item => {
      return new CarouselItem(item);
		});

		let length = this.items.length;
		let i = 0;
    document.addEventListener("click", () => {
      if (event.target.dataset.arrow) {
				const data = event.target.dataset.arrow;
				console.log(data);
				if (data === 'R') {
					if (i < length) i++;
					else {
						i = 0;
					}
					this.updateActive(this.items[i]);
				}
				if (data === 'L' && i > length) {
					if (i > length) i--;
					else {
						i = length;
						i--;
					}
					this.updateActive(this.items[i]);
				}
    	}
		});

		this.active = this.items[i];
		this.init();
	}

	init() {
		this.active.select();
	}

	updateActive(newActive) {
		this.active.deselect();
		this.active = newActive;
		this.active.select();
	}
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));