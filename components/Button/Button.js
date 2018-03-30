// alert('hi')

class Button {
    constructor(element){
        this.element = element;
        this.element.addEventListener('click', () => {
            this.hide();
        })
    }

}

let buttons = Array.from(document.querySelectorAll(".Button"));