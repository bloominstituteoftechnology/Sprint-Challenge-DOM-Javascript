class Button {
    constructor(element) {
        this.element = element;

        this.element.addEventListener('click', () => {
            this.disappear(); 
        });
    }


    disappear() {
        this.element.style.display = 'none';
        
    }
}

let buttons = document.querySelectorAll(".Button");
console.log(buttons);
buttons = Array.from(buttons).map(button => new Button(button));
console.log(buttons);
