class Button {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector(".Button");
        this.button.addEventListener("click", () => {
            this.displayOff();
        });

    }

    displayOff() {
        this.element.classList.add("Button--display--off");
    }
}

let allButtons = document.querySelectorAll(".Button");
allButtons = Array.from(allButton).map (button => {
    return new Button(button);
})