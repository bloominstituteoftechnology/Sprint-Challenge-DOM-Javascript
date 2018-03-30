// Creating class Constructor Component Button, each time event listener is clicked
// it will trigger the .Button--hidden from CSS file
class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => {
            this.hide();
        })
    }
    hide() {
        this.element.classList.toggle('Button--hidden')
    }
}

// Connecting .Button from CSS file to buttons variable
let buttons = document.querySelectorAll(`.Button`);

// For buttons Array pass thru Constructor Class Button
buttons = Array.from(buttons).map( button => new Button(button));