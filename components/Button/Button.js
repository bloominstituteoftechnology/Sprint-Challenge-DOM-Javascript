class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', (event) => {
        this.element.style.display = 'none';
          });
    }
}

let buttons = document.querySelectorAll('.Button');
buttons = Array.from(buttons).map(buttons => new Button(buttons));
console.log(buttons);