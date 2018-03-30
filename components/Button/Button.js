class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => 
            this.select())
    }

    select() {
        this.element.classList.toggle('Button--disappear');
    }

}

let buttons = document.querySelectorAll(".Buttons");
buttons = Array.from(buttons).map(buttons => new Button(buttons));