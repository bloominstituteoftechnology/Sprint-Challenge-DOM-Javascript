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

// class CarouselArrow {
// 	constructor(element) {
// 		this.element = element;
// 		this.element.addEventListener('click', (event) =>{
// 			event.text = this.element.textContent;
// 			console.log("CarouselArrow click")
// 			console.log(`event.text ${event.text}`);
// 		});
// 	}
// }

class Carousel {
	constructor(element) {
		this.element = element;
		// this.arrowLeft = this.element.querySelector(".Carousel__arrow-left");
		// this.arrowRight = this.element.querySelector(".Carousel__arrow-right");
		this.items = element.querySelectorAll(".Carousel__item");
		let i = 0;
		this.items = Array.from(this.items).reduce((obj, item) => {
			obj[i++] = new CarouselItem(item);
			return obj;
		});
		console.log(`items - > ${this.items}`)
		this.element.addEventListener('click', (event) => {
			// console.log(`event.text ${event.text}`);
			if (this.element.textContent) {
				this.updateActive(this.element.textContent);
				event.stopPropagation();
			}
		})
		this.activeData = 0;
	}

	updateActive(arrow) {
		if (arrow === null) return;
		this.items[this.activeData].deselect();

		if (arrow === '>') this.items[++this.activeData].select();
		if (arrow === '<') this.items[--this.activeData].select();
	}
}
let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
