class Buttons {
    constructor(element) {
        this.element = element; // attach dom to object

        this.element.addEventListener("click", () => {
            this.element.classList.add("Button--hide"); // on click, hides the button.
        });
    }
}

let button = document.getElementsByClassName("Button");
button = Array.from(button).map(button => {
    return new Buttons(button)
}); // implicit return

console.log(button); // tracks button in the console