// Button Component
class Button {
	constructor(element) {
		// store each button itself
		this.element = element;
		// add an event listener to each button
		this.element.addEventListener('click', this.hide);
	}
	// Prototype methods
	// callback for when a button's event listener is triggered
	hide() {
		this.element.classList.toggle('.Button');
	}
}

// access the 3 buttons
let buttons = document.querySelectorAll('.Button');
console.log(buttons);

// iterate over the collection of buttons
// create an instance of class Button for each button
buttons = Array.from(buttons).map(btn => new Button(btn));
console.log(buttons);

// tabs = Array.from(tabs).map(tabs => new Tabs(tabs));