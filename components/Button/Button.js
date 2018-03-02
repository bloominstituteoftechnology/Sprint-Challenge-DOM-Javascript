class Button {
    constructor(element) {
        this.element = element;
        
        this.element.addEventListener("click", () => {
            this.click();
            setTimeout(() => {this.hide()}, 300);
        });
    }

    click() {
        this.element.classList.add("Button--click");
    }

    hide() {
        this.element.classList.add("Button--hidden");
        var audio = document.getElementsByTagName("audio")[0];
        audio.play();
    }
}


let buttons = document.querySelectorAll(".Button");
buttons = Array.from(buttons).map(but => new Button(but));