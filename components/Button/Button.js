
class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => {
            this.hide();
        })
    }

    hide() {
        this.element.classList.toggle('Button--none')
    }
}

let buttons = document.querySelectorAll(".Button");
buttons = Array.from(buttons).map(button => {
    return new Button(button);
})


// let button = document.querySelectorAll(".Button");

// for(let i = 0; i < button.length; i++) {
//     button[i].addEventListener('click', () => {
//         button[i].classList.toggle('Button--none')
//     })
// }
