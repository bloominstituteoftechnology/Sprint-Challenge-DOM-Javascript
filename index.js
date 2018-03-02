class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => this.hideButton());
    }
    hideButton() {
        this.element.classList.add('button--hide-button');
    }
}
const buttons = document.querySelectorAll('.Button');
const button1 = new Button(buttons[0]);
const button2 = new Button(buttons[1]);
const button3 = new Button(buttons[2]);