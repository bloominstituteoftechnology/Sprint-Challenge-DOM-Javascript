class Button {
	constructor(element) {
		this.element = element;
		this.buttons = document.querySelectorAll('.Button__actual');
		this.buttons = Array.from(this.buttons).map(item => {
			return new Handler(item, this);
		}); //add event listener to each .Button__actual
	}
}

class Handler {
	constructor(element, parent) {
		this.element = element;
		this.element.addEventListener('click', () => {
			this.hideButton(); // apply a class that hides the button
		});
	}

	hideButton() {
		// this.element.classList.toggle('Button__actual--hide');
		this.element.classList.toggle('Button__actual--phantom');
	}
}

const mainButtonClass = document.querySelector('.Button');
new Button(mainButtonClass);