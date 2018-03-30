let buttons = document.querySelectorAll('.Button');

class Button {
    constructor(element) {
        this.element = element;
        this.dataNumber = element.dataset.number;
        this.element.addEventListener('click', () => {this.buttonClick()});
    }

    buttonClick() {
        this.element.classList.toggle('Button--Clicked');
    }
}

buttons = Array.from(buttons).map( button => new Button(button));