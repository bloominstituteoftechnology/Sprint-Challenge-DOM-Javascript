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
    this.items = element.querySelectorAll(".Carousel__item");
    this.items = Array.from(this.items).map(item => {
      return new CarouselItem(item);
		});

		let length = this.items.length;
		let i = 0;
    document.addEventListener("click", () => {
      if (event.target.dataset.arrow) {
				console.log('test');
				const data = event.target.dataset.arrow;
				console.log(data);
				if (data === 'R') {
					if (i < length - 1) i++;
					else i = 0;
					this.updateActive(this.items[i]);
				}
				if (data === 'L') {
					if (i > 0) i--;
					else i = length - 1;
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
