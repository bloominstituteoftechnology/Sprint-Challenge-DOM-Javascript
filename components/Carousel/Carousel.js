class Carousel {
	constructor(element) {
		this.element = element;
		this.items = document.querySelectorAll('.Carousel__item');
		this.arrow(document.querySelectorAll(".Carousel__arrow"));
		this.index = 0;
	}

	goRight() {
		this.items[this.index].classList.remove('Carousel__item-focused');
		this.index += 1;
		if (this.index === this.items.length) this.index = 0;
		this.items[this.index].classList.add('Carousel__item-focused');
	}

	goLeft() {
		this.items[this.index].classList.remove('Carousel__item-focused');
		this.index -= 1;
		if (this.index < 0) this.index = 2;
		this.items[this.index].classList.add('Carousel__item-focused');
	}

	arrow(arrowArray) {
		this.actualArray = Array.from(arrowArray).map(arrow => {
			if (arrow.id === "left") arrow.addEventListener('click', () => this.goLeft());
			else arrow.addEventListener('click', () => this.goRight());
		});
	}

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

/*************************************************************************/

/*
class Carousel {
	constructor(element) {
		this.element = element;
		this.items = document.querySelectorAll('.Carousel__item');
		this.items = Array.from(this.items);
		this.currentlyActive = document.querySelector('.Carousel__item-focused');

		this.one = document.querySelector('.Carousel__item[data-num="1"]');
		this.two = document.querySelector('.Carousel__item[data-num="2"]');
		this.three = document.querySelector('.Carousel__item[data-num="3"]');

		this.rightButton = document.querySelector('.Carousel__arrow-right');
		this.leftButton = document.querySelector('.Carousel__arrow-left');

		this.rightButton.addEventListener('click', () => {
			this.goRight();
		});
		this.leftButton.addEventListener('click', () => {
			console.log('hey');
			this.goLeft();
		});
	}

	toggleOne() {
		this.one.classList.toggle('Carousel__item-focused');
	}

	toggleTwo() {
		this.two.classList.toggle('Carousel__item-focused');
	}

	toggleThree() {
		this.three.classList.toggle('Carousel__item-focused');
	}

	reassignCurrentlyActive() {
		this.currentlyActive = document.querySelector('.Carousel__item-focused');
	}

	goRight() {
		this.data = this.currentlyActive.dataset.num; //returns string

		if (this.data === "3") {
			this.toggleOne();
			this.toggleThree();
		}
		if (this.data === "2") {
			
			this.toggleThree();
			this.toggleTwo();
		}
		if (this.data === "1") {
			this.toggleOne();
			this.toggleTwo();
		}

		this.reassignCurrentlyActive(); 
	}

	goLeft() {
		this.data = this.currentlyActive.dataset.num; //returns string

		if (this.data === "3") {
			this.toggleThree();
			this.toggleTwo();
		}
		if (this.data === "2") {
			
			this.toggleTwo();
			this.toggleOne();
		}
		if (this.data === "1") {
			this.toggleOne();
			this.toggleThree();
		}

		this.reassignCurrentlyActive(); 
	}

}
*/
