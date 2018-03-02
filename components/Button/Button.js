/* Sprint-Challenge-DOM-Javascript - Joshua Goode */

class Button {
    constructor(element) {
        this.element = element;
        
        this.element.addEventListener("click", () => {
            this.hidden();
        });
    }

    hidden() {
        this.element.classList.add("Button--hide");
    }
}

let buttons = document.querySelectorAll(".Button");
buttons = Array.from(buttons).map(button => new Button(button));