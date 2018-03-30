class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener("click", () => {
            this.buttonClick();
        });
    }

    buttonClick() {
        this.element.classList.toggle("button--selected");
        console.log("button clicked");
    }
}


let button = document.querySelectorAll(".Button");
button = Array.from(button).map(button => new Button(button));