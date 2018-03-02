class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener("click", (element) => {
            this.makeDisappear();
        });
    }

    makeDisappear() {
    this.element.classList.add("Button--hide");
    }
}

let buttons = document.getElementsByClassName("Button");
buttons = Array.from(buttons).map(buttons  => new Button(buttons));