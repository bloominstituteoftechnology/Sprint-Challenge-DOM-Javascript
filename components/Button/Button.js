class Button {
	constructor(element) {
		this.element = element;
		this.buttons = document.querySelectorAll('.Button__actual');
		this.buttons = Array.from(this.buttons).map(item => {
			return new Disguise(item);
		}); //add event listener to each .Button__actual
	}
}

class Disguise {
	constructor(element) {
		this.element = element;
		this.body = document.body;
		this.element.addEventListener('click', () => {
			this.invert(); // inverts page colors
			this.disguiseButton(); // apply a class that hides the button
		});
	}

	disguiseButton() {
		this.element.classList.toggle('Button__actual--phantom');
	}

	invert() {
		this.body.classList.toggle('Body--invert');
	}
}

// class Invert extends Disguise {
// 	constructor(element) {
// 		this.element = element;
// 	}
// }

const mainButtonClass = document.querySelector('.Button');
new Button(mainButtonClass);