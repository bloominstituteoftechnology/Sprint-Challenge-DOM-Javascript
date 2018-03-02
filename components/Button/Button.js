class Button {
    constructor(element) {
        this.element = element;
        
        //this.element.addEventListener("click", () => this.element.classList.toggle('Button--hidden'));

        //or with toggle: 
        this.element.addEventListener("click", () => this.element.classList.toggle('Button--hidden'));
        //this.element.addEventListener("mouseup", () => this.element.classList.toggle('Button--hidden'));
        //this.element.classList.toggle('Button--hidden');
    


        //topDropdownList.classList.toggle("selected");

        //this.element.addEventListener("mouseup", () => this.element.classList.remove('Button--hidden'));
        
    }

}






buttons = document.getElementsByClassName('Button');
buttons = Array.from(buttons).map((item) => new Button(item));

console.log('this is the first element', buttons[1]);