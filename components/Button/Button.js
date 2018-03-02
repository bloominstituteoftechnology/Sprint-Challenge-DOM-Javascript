//creat constructor for button objects
class Button {
    constructor(element) {
        this.element = element;
        this.clicked = 0;
        this.element.addEventListener("click", () => {
            this.disappear();
        })
    }
//function determines whether clicked and appears/disappears box
    disappear() {
        this.element.classList.toggle("Button--invisible")
    }
}

//queryselect buttons from page and map to button constructor
let buttons = Array.from(document.querySelectorAll(".Button"));
buttons = buttons.map(button => {
    new Button(button);
});