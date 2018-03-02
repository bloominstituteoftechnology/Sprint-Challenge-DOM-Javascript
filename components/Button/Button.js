class Button {
    constructor(element){
        this.element = element;
        console.log(element);

    this.element.addEventListener("click", () => {
        this.element.classList.add("Button--hidden");
    });
    }
}

const button = document.querySelectorAll(".Button");
console.log(button);
const buttons = Array.from(button).map(button => {
    return new Button(button);
});

