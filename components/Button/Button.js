class Button {
    constructor(element) {
        element.addEventListener('click', () => {
            element.classList.add('Button--hidden')
        });
    }
}

let buttons = document.querySelectorAll('.Button')
buttons = Array.from(buttons).map(buttons => new Button(buttons));