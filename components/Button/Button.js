class Button {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector(".Button");

        this.button.addEventListener("click", () => {
        this.buttonDisp();
        });
    }
    buttonDisp() {
        let div = document.getElementsByClassName("Button");
        div.style.display = 'none';
        // this.element = document.getElementsByClassName("Button");
        // this.element.style.display = 'none';
        console.log('This will never be seen because you suck at Javascript!!!');
    }
}
let buttons = document.querySelectorAll("Button");
buttons = Array.from(buttons).map(button => new Button(button));
