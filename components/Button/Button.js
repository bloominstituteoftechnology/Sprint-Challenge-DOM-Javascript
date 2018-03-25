class Button {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelectorAll(".Button");
        this.button.addEventListener("click", () => {
            this.button.style.display = "none";
        })

    }
}

let allButtons = document.activeElement.querySelectorAll(".Button");
allButtons = Array.from(allButton).map (button => {
    return new Button(button);
})