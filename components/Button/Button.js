// In line method
/*
const buttons = document.getElementsByClassName('Button');

Array.from(buttons).map(button => button.addEventListener('click', () => button.style.display = 'none'));
*/

// Using and Object way, from class
class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => {
            this.element.classList.add('Button--hide');
        });
    }
}

let buttons = Array.from(document.querySelectorAll(".Button")).map(button => new Button(button));
