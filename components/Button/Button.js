// variable
let buttons = document.querySelectorAll('.Button');

class Button {
    constructor(element){
        this.element = element; // attach dom element to object
        this.dataNumber = element.dataset.number; // assign to button data-number
        
        this.element.addEventListener('click', () => {
            this.buttonClick()
        })
    }

    // button click toggles hiding/showing 'I Dissappear' buttons
    buttonClick() {
        this.element.classList.toggle('Button--hide')
    }
}

console.log(buttons);

buttons = Array.from(buttons).map( button => new Button(button));