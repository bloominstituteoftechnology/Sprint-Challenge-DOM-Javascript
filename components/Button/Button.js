
class Buttons {
    constructor(element) {
        this.element = element;
        this.element.addEventListener("click", () => {
           this.hide();
        });
    }

    hide() {
        let element = this.element;
        element.style.display = 'none';
    }
}

let buttons = document.getElementsByClassName("Button");

buttons = Array.from(buttons).map(button => {
    return new Buttons(button);
})
