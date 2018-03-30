class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener("click", () => {
            this.element.classList.add("Button--dissappear");
        });
    }
}
let buttons = document.querySelectorAll(".Button");
buttons = Array.from(buttons).map(button => {
    return new Button(button);
});