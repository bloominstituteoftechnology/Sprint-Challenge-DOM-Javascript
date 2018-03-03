let secRow = document.querySelector('.Section__row');
let button = document.querySelectorAll('.Button');

console.log(button);

class Button {
    constructor(element) {
        this.element = element;
        this.flag = true;
        this.element.addEventListener('click', (event) => {
            if (this.flag === true) {
                console.log('clicked');
                this.element.style.border = 'none';
                this.element.innerHTML = '';
                this.flag = false;
            }
            else {
                this.element.style.border = '2px dashed crimson';
                this.element.innerHTML = 'I Disappear';
                this.flag = true;
            }

        })
    }
}

button.forEach((item) => new Button(item));
console.log(button);