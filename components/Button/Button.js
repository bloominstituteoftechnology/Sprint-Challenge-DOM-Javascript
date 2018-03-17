class Button {
    constructor(element){
        this.element = element;
        this.button = this.element.querySelectorAll(".Button");

        this.element.addEventListener("click", () => {
            this.hideButton();
        });
    }
    hideButton() {
        this.element.classList.add("Button--hidden");
    }
}

let buttons = document.querySelectorAll(".Button");
buttons = Array.from(buttons).map(button => new Button(button));