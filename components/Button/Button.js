class Button {
    constructor(element) {
        this.element = element;
        
        this.element.addEventListener("click", () => this.element.classList.add('Button--hidden'));
    }

}






buttons = document.getElementsByClassName('Button');
buttons = Array.from(buttons).map((item) => new Button(item));

console.log('this is the first element', buttons[1]);