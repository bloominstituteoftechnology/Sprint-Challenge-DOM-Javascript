class Button {
    constructor(button){
        this.button = button;
        this.button.addEventListener('click', this.clickHandler.bind(this));
    }
    clickHandler(){
        this.button.classList.add("hidden");
    }
}

let buttons = document.querySelectorAll('.Button');
buttons = buttons.forEach(button => new Button(button));