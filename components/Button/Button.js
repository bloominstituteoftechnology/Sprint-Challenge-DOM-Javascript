class Button {
        constructor(button) {
            this.button = button;
            this.button.addEventListener("click", () => {
                this.hideButton();
            });
        }
        hideButton() {
            this.button.classList.toggle('Button--hide');
        }
    }
    
    let button = document.querySelectorAll('.Button');
    button = Array.from(button).map(button => new Button(button)); 