class Button {
    constructor() {

    }
}

let allButtons = document.activeElement.querySelectorAll(".Button");
allButtons = Array.from(allButton).map (button => {
    return new Button(button);
})