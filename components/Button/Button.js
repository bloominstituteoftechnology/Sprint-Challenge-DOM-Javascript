class Button {
    constructor(element) {
        this.element = element;

        this.element.addEventListener("click", () => {
            this.element.classList.add('.Button--disappear');
        });
    }
    // goAway() {
    //     // let element = this.element;
    //     this.element.classList.add('.Button--disappear');
    // }
}
let button = document.getElementsByClassName(".Button__box");

button = Array.from(button).map(button => {
     new Button(button)
});