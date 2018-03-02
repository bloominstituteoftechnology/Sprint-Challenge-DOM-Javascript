class Button {
    constructor(element){
        this.element = element;
        this.element.addEventListener('click', (element) => {
            this.element.classList.add("Button--selected");
        })
    }
}

let buttons = document.getElementsByClassName("Button");
buttons = Array.from(buttons).map(buttons => new Button(buttons));