class Button {
    constructor(element) {
        this.element = element;

        this.button.addEventListener("click", () => {
            this.displayOff();
        });

    }

    displayOff() {
        this.element.style.display = "none"
    }
}

let allButtons = document.querySelectorAll(".Button");
allButtons = Array.from(allButton).map (button => {
    return new Button(button);
})