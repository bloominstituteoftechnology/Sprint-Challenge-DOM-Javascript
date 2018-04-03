

class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => { this.buttonClick() })
    }

    buttonClick() {
        this.element.style.visibility = 'hidden';
    } 
}

let buttons = document.querySelectorAll('.Button');
buttons = Array.from(buttons).map(button => {
    return new Button(button);
})