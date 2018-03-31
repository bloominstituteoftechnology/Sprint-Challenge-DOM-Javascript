class Button {
	constructor(element) {
		this.element = element; // individual button
		this.dataNumber = this.element.dataset.num;
		this.element.addEventListener('click', () => {
			this.toggleDisplay();
		});
	}

	toggleDisplay() {
		this.element.classList.toggle('Button__actual--phantom');

		if (this.dataNumber === "1") {
			this.element.classList.toggle('active');
			this.flickr();
		}

		if (this.dataNumber === "2") this.sunrise();

		if (this.dataNumber === "3") {
			this.element.classList.toggle('active');
			this.ayy();
		}
	}

	ayy() {
		document.body.classList.toggle('Body--stars');
		if (this.element.classList.contains('active')) {
			// new PopUp --> can i access this if its in another document ? 
			alert('ayyy great choice mate');
		} 
	}

	flickr() {
		if (this.element.classList.contains('active')) {
			this.interval = setInterval(() => {
				document.body.classList.toggle('Body--flickr');
			}, 100);
		} else {
			clearInterval(this.interval);
		}
	}

	sunrise() {
		document.body.classList.toggle('Body--beach');
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

