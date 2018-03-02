class Button {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector(".Button");
   
        // this.button.addEventListener("click", () => {
        //     this.button.deselect();
        //     console.log('ev');
        // }); 
    }
    
    deselect() {
        this.element.classList.remove("Button");
    }
}

let buttons = document.querySelectorAll(".Button");
buttons = Array.from(buttons).map(buttons => new Button(buttons));