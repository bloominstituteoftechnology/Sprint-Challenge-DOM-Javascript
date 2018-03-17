class Button {
    constructor (element) {
        this.element = element;
        this.element.addEventListener("mousedown", () => {
            this.hideButton();
        });
    }
    
hideButton () {
    let element = this.element;
    element.style.display = "none";
}
}

let button = document.getElementsByClassName("Button");

button = Array.from(button).map(button => {
    return new Button(button);
})