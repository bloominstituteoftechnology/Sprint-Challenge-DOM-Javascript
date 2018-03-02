class Buttons {
    constructor(element) {
      this.element = element;
      this.element.addEventListener("click", (element) => {
        this.element.classList.add("Button__magic")
      });
    }
}

let buttons = document.getElementsByClassName("Button");
buttons = Array.from(buttons).map(buttons => new Buttons(buttons));