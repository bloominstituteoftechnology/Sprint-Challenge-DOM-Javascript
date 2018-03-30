// creates an Array of all buttons with Button class
let buttons = document.querySelectorAll('.Button');

// Button Class
class Button {
    // each button will be passed into the constructor as the element
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => {this.buttonClick()});
    }

    buttonClick() {
        this.element.classList.toggle('Button--Clicked');
    }
}

buttons = Array.from(buttons).map( button => new Button(button));