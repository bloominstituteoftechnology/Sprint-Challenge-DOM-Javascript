// creates an Array of all buttons with Button class
let buttons = document.querySelectorAll('.Button');

// Button Class
class Button {
    // each button will be passed into the constructor as the element
    constructor(element) {
        this.element = element;
        // adding an event listener to each button for when the button is clicked
        this.element.addEventListener('click', () => {this.buttonClick()});
    }

    buttonClick() {
        // when button is clicked this will toggle the Button--Clicked css class on the button
        this.element.classList.toggle('Button--Clicked');
    }
}
// this creates an instance of each button in buttons and passes them into the Button class
buttons = Array.from(buttons).map( button => new Button(button));