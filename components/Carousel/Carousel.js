class Carousel {
	constructor(element) {
		this.element = element;
		this.items = document.querySelectorAll('.Carousel__item');
		this.items = Array.from(this.items);

		this.activeItem = this.activeDisplay();
		this.activeDataNum = this.dataNumber(this.activeItem);
		this.nextActive = this.next();

		this.right = document.querySelector('.Carousel__arrow-right');
		this.left = document.querySelector('.Carousel__arrow-left');

		this.right.addEventListener('click', () => {
			this.removeActive(); // remove active class from all classes
			this.activeItem = this.next(); // add active class to next in line
		});
	}

	dataNumber(input) {
		this.dataAttribute = input.dataset.num;
		console.log(input);
		return this.dataAttribute;
	}

	activeDisplay() {
		Array.from(this.items).map(item => {
			if (item.classList.contains('Carousel__item-focused')) {
				return item;
			}
		});
	}

	removeActive() {
		this.items.forEach(item => {
			item.classList.remove('Carousel__item-focused');
		});
	}

	next() {
		if (this.activeDataNum === "3") {
			return document.querySelector('.Carousel__item[data-num="3"]');
		} else {
			return document.querySelector(`.Carousel__item[data-num="${Number(this.activeDataNum)+1}"]`);
		}
	}

	updateActive(newActive) {
		this.activeItem = newActive;
	}
}

/*
class Next {
	constructor(element, parent) {
		this.element = element;
		this.parent = parent;
		this.rightArrow = document.querySelector('.Carousel__arrow-right');
		this.rightArrow.addEventListener('click', () => {
			this.goNext();
		})
	}

	goNext() {
		// remove .Carousel__item-focused
		// add .Carousel__item-focused to next item
		if (this.parent.activeDataNum === "3") {
			this.parent.removeActive();
			this.parent.updateActive(document.querySelector(`.Carousel__item[data-num="1"]`));
		}
	}
}

class Back {
	constructor(element, parent) {
		this.left = document.querySelector('.Carousel__arrow-left');
	}
}
*/
let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));