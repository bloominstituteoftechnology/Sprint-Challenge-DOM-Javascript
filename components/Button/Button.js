// Button Component
class Button {
	constructor() {
		// store each button itself
		// add an event listener to each button
	}
	// Prototype methods
	// callback for when a button's event listener is triggered
}

// access the 3 buttons
let buttons = document.querySelectorAll('.Button');
// console.log(buttons);

// iterate over the collection of buttons
// create an instance of class Button for each button
buttons = Array.from(buttons).map((btn) => new Button(btn));
console.log(buttons);