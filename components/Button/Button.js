class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener("click", () => {
            this.element.style.display = "none";
        });

    }

    // displayOff() {
    //     this.element.style.display = "none";
    // }
}

let allButtons = document.querySelectorAll(".Button");
allButtons = Array.from(allButtons).map (button => {
    return new Button(button);
})