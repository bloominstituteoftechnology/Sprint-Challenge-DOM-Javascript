class Button {
    constructor(butten) {
        this.element = butten;
        this.element.addEventListener("click", () => {
            this.element.classList.add("Button_disappear");
        })
    }
}

const buttonn = document.querySelectorAll(".Button");
buttonn.forEach(button => new Button(button))