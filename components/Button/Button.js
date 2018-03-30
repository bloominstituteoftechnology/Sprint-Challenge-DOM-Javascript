let buttons = document.querySelectorAll('.Button');

class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => {
            this.buttonClick()
        });
    }
    buttonClick() {
        this.element.classList.add('Button--disappear');
    }
}

buttons = Array.from(buttons).map(button => new Button(button));