

class button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => {
            this.element.classList.add('Button__dis-disappear');
        })
    }
}
let buttons = document.querySelectorAll('.Button__dis');
buttons = Array.from(buttons).map(buttons => new button(buttons));





















