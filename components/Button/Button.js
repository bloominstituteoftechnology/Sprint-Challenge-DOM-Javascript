class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => {
            this.element.classList.add('Button--hidden'); //--hidden hides the array variables when clicked
        });
    }
}
let buttons = document.getElementsByClassName('Button'); //Button class into a string
buttons = Array.from(buttons).map(button => new Button(button)); // Button class into an array