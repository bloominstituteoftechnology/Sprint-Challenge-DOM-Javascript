// create button class constructor
class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener("click", () => {
            this.noShow();
        });
    }

    //noShow function
    noShow() {
        this.element.style.display = "none";
    }
}

let myButtons = document.querySelectorAll(".Button");
myButtons = Array.from(myButtons).map(button => {
    return new Button(button);
});

