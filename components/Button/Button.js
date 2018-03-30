class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener("click", () => {
            this.element.classList.add("Button--dissappear"); //click event listener activates class list in css
        });
    }
}
let buttons = document.querySelectorAll(".Button");
buttons = Array.from(buttons).map(button => { //takes .Button div and turns it into an array to map into and return ne class with class list which causes each one to dissappear
    return new Button(button);
});