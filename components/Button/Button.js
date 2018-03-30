let buttons = document.querySelectorAll('.Button');

class Button{
    constructor(input){
        this.button = input;
        this.button.classList.add("invisible");
    }
}

buttons = Array.from(buttons).map((item) => {
    item.addEventListener('click', () => {
        new Button(item);
    })
});