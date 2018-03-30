
// create button class constructor
class Button { 
    constructor(element) {
        this.element = element;
        this.element.addEventListener("click", () => {
            this.noShow();
        });
        this.element.addEventListener("mouseenter", () => {
            this.addBorder();
        })
        this.element.addEventListener("mouseleave", () => {
            this.removeBorder();
        })
    }

    //noShow function
    noShow() { // adds display: none when user clicks on button
        this.element.style.display = "none";
    }

    //addBorder function
    addBorder() {
        this.element.style.border = "2px dashed red";
    }

    //removeBorder function
    removeBorder() {
        this.element.style.border = "3px solid black";
    }
}

let myButtons = document.querySelectorAll(".Button");
myButtons = Array.from(myButtons).map(button => {
    return new Button(button);
});

