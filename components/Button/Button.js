let buttons = document.querySelectorAll('.Button');

class Button {
    constructor(element){
        this.element = element;
        this.dataDig = element.dataset.dig;
        this.element = document.querySelector(`.Button[data-dig ="${this.dataDig}"]`);
        this.element.addEventListener('click',() => {this.buttonClick()})
    }

    buttonClick() {
        this.element.classList.toggle('butt--show');
    }
}

buttons = Array.from(buttons).map( button => new Button(button));