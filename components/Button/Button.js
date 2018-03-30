class Button {
    constructor(element){
        this.element = element;
        this.element.addEventlistener('click', () => {
            this.hideButton();
        });
}

    hideButton() {
        this.element.classList.add("Hide--button")
    }
}
let buttons = document.querySelectorAll(".Button");
buttons = Array.from(buttons).map(button => new Button(button));
