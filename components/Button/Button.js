class Button {
    constructor(element) {
        this.element = element;

        this.element.addEventListener("click", () => {
            this.element.classList.add("Button__Bai");                    
        });
    }
}

let buttons = document.querySelectorAll("Button");
buttons = Array.from(buttons).map(buttonDisappear => {
    new Button(buttonDisappear)
});