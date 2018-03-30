class Button {
    constructor(element){
        console.log('hi');
        this.element = element;
        console.log(this.element);
       // this.button = document.querySelectorAll('.Button');
        this.element.addEventListener('click', this.hideButton);
    }
    hideButton(){
        console.log('hidey');
        console.log(this.element);
        this.element.classList.add('Button--hide');
    }
}

let buttons = document.querySelectorAll('.Button');
buttons =  Array.from(buttons).map(buttons => new Button(buttons));
//buttons =  new Button(buttons);

console.log(buttons);