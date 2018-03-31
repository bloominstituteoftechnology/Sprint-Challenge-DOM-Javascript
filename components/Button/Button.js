class Button {
	constructor(element) {
		this.element = element; // individual button
		this.dataNumber = this.element.dataset.num;
		this.element.addEventListener('click', () => this.toggleDisplay());
	}

	toggleDisplay() {
		this.element.classList.toggle('Button__actual--phantom');
		if (this.dataNumber === "2") this.invert();
	}

	invert() {
		document.body.classList.toggle('Body--invert');
	}
}

let buttonArray = document.querySelectorAll('.Button__actual');
buttonArray = Array.from(buttonArray).map(item => new Button(item));

/*********************************************************************/

// class Button {
// 	constructor(element) {
// 		this.element = element;
// 		this.buttons = document.querySelectorAll('.Button__actual');
// 		this.buttons = Array.from(this.buttons).map(item => {
// 			return new Disguise(item, this);
// 		}); //add event listener to each .Button__actual
// 	}

// 	dataNumber(input) {
// 		this.dataAttribute = input.dataset.num;
// 		return this.dataAttribute;
// 	}
// }

// class Disguise {
// 	constructor(element, parent) {
// 		this.element = element;
// 		this.parent = parent;
// 		this.body = document.body;
// 		this.dataNum = this.parent.dataNumber(this.element);
// 		this.element.addEventListener('click', () => {
// 			this.reappear(); // will display any active (hidden) buttons
// 			this.disguiseButton(); // apply a class that hides the button
// 			this.invert(); // inverts page colors
// 		});
// 	}

// 	reappear() {
// 		this.parent.buttons.forEach(button => {
// 			button.element.classList.remove('Button__actual--phantom');
// 		});
// 	}

// 	disguiseButton() {
// 		this.element.classList.toggle('Button__actual--phantom');
// 	}

// 	invert() {
// 		if (this.dataNum === "2") this.body.classList.toggle('Body--invert');
// 		else this.body.classList.remove('Body--invert');
// 	}
// }

