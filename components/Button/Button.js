class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => {
            this.element.classList.add('Button--hide');
        });
    }
}

let buttons = document.querySelectorAll('.Button');
buttons = buttons.forEach(button => new Button(button));
console.log(buttons);