// // Creates and array of all elements with class name "Button" (3)
// const buttons = document.getElementsByClassName("Button")
// // Adds "display: none" to each "Button" element that is clicked
// Array.from(buttons).forEach(button => button.addEventListener('click', () => button.style.display = 'none'));

// Refactored to constructor:


class Button {
    constructor (element) {
        this.element = element;
        this.element.addEventListener("click", () => {
            this.element.style.display = "none";
            // this.element.classList.add("button--hide")
        })
    }
}

// Creates an array-like list of all elements with class 'Button'.
let buttons = document.getElementsByClassName('Button');
// Converts that array-like list into an actual array, and then creates
// a new instance of the Button class for each element in the array.
buttons = Array.from(buttons).map(button => {new Button(button)});