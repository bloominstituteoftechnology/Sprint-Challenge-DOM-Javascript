

class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener("click", () => {
        this.buttonToggle();
        });
    }

    buttonToggle() {
        this.element.classList.toggle('Button--vanish')
    }
}
class ButtonRefresh {
    constructor(element) {
        this.element = element;
        this.element.addEventListener("click", () => {
        location.reload();
        });
    }
}

let buttons = document.querySelectorAll('.Button');
buttons = Array.from(buttons).map(button => new Button(button));

let buttonsRefresh = document.querySelectorAll('.Button--refresh');
buttonsRefresh = Array.from(buttonsRefresh).map(button => new ButtonRefresh(button));