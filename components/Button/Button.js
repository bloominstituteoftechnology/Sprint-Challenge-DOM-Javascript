class Button {
    constructor(element) {
        this.element = element;

        //console.log('1')
        this.element.addEventListener("click", () => {
            this.element.classList.add("Button--selected");
            //console.log('clicked');
        });
    }
}

let buttons = document.querySelectorAll(".Button");
buttons = Array.from(buttons).map(buttonDisappear => {
    new Button(buttonDisappear)
   // console.log('err');
});