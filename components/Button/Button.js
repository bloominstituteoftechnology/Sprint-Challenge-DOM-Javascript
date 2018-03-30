class Button {
    constructor(element){
        this.element = element;
        this.element.addEventlistener('click', () => {
            this.hide();
        })
}

    hide() {
        this.element.classList.add("Hide--Button")
    }

let buttons = document.querySelectorAll(".Button");
buttons = Array.from(buttons).map(button => new Button(button));
