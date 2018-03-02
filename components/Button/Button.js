class Button {
    constructor(element){
        this.element = element;
        this.element.addEventListener('click', function() {
            button.classList.hide('button__header');
        });
    }
}
let buttons = document.getElementsByClassName("Section Section--bordered Section--full");
buttons = Array.from(buttons).map(button => new Button(button));
let button = document.querySelectorAll("button__header-hidden");
