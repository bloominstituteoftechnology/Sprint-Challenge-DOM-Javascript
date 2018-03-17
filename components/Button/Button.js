class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener("click", () => {
            this.toggleVisibality();
        })
    }
    toggleVisibality(){
        this.element.classList.add("Button--clicked");
    }
}

let Buttons = document.querySelectorAll(".Button");
Buttons = Array.from(Buttons).map(button => new Button(button));