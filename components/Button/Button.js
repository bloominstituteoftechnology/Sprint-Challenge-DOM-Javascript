// let buttons = document.querySelectorAll(".Button");

class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => {
            this.element.classList.add('Button--hidden');
        });
    }
} 

// buttons.forEach(item => {
//     return new Button(item);
// })

let buttons = document.getElementsByClassName("Button");
buttons = Array.from(buttons).map(button => new Button(button));
console.log(buttons);

// Button needed to be accessed without the . 