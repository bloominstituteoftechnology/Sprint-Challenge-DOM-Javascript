// alert('hi')

class Button {
    constructor(element){
        this.element = element;
        this.element.addEventListener('click', () => {
            this.hideMe();
        })
    }

    hideMe(){
        this.element.classList.add('Button--hide'); 
    }

}

let buttons = Array.from(document.querySelectorAll(".Button"));
buttons.forEach(el => new Button(el)); 