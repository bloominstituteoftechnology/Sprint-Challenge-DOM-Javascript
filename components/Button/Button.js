class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', (event) => {
        this.element.style.display = 'none';
        setTimeout((element) => {
            this.element.style.display = 'inline-block';
        }, 3500);
          });
    }

}

let buttons = document.querySelectorAll('.Button');
buttons = Array.from(buttons).map(buttons => new Button(buttons));
console.log(buttons);