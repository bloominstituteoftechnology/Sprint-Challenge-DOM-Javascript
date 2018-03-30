/* <div class="Section Section--bordered Section--full">
    <div class="Section__header">Three Buttons</div>

    <div class="Button">I Dissapear</div>
    <div class="Button">I Dissapear</div>
    <div class="Button">I Dissapear</div>

</div> */

let button = document.querySelectorAll('.Button');

class Button {
    constructor(element){
        this.element = element;
        this.element.addEventListener('click', () => {this.buttonClicked()});
    }
    buttonClicked() {
        this.element.classList.add('Button__button-off');
    }
}

button = Array.from(button).map((button) => new Button (button));
