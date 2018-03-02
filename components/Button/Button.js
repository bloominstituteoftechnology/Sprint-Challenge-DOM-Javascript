/*Pseudo code:
step1: create a class that constructs the object in the DOM:
a) event listener when clicked
b) when clicked calls a function that adds the display: none attribute

step2: iterate through the node list and construct these objects*/

class Button {
    constructor (ele) {
        this.ele = ele;
        this.ele.addEventListener("click", () => {
            this.dissapearFunc();
        });
    };

    dissapearFunc() {
        this.ele.classList.toggle("Button--dissapear");
    }
}

let b = document.querySelectorAll(".Button");
b = Array.from(b).map(foo => new Button(foo));