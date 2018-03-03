/*
let disappear = document.getElementsByClassName("Button");
disappear = Array.from(disappear).map(button => {
    button.addEventListener("click", () => {
        button.remove("Button");
    })
})
*/

// Class constructor

class Click {
    constructor(element) {
        this.element = element;

        this.element.addEventListener("click", () => {
            this.element.classList.add("Disappear");
            
        });
    }
}

let buttons = document.getElementsByClassName("Button");
buttons = Array.from(buttons).map(buttonClick => {
    new Click(buttonClick)
});