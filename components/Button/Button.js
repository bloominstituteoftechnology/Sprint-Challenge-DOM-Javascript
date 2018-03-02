class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener("click", () => {
            this.element.classList.toggle('Button--hide');
        });
    }
}

let button = document.querySelectorAll('.Button');
button = Array.from(button).map(button => new Button(button));