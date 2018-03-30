class Button {
    constructor(element){
        this.element = element;
        this.element.addEventlistener('click', () => {
            this.hideButton();
        })
}

    hideButton() {
        let element = this.element;
        element.style.display = "none";    }

let buttons = document.querySelectorAll(".Button");
buttons = Array.from(buttons).map(button => new Button(button));
