class Button {
    constructor(button) {
        this.button = button;

        this.button.addEventListener('click', () => {
            this.disapear();
        });
    }
    
    disapear() {
        this.button.classList.add('disapear');
        }
}

let btns = document.getElementsByClassName('Button');
Array.from(btns).forEach(btn => {
    new Button(btn);
});



