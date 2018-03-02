class Button {
    constructor(element, parent) {
      this.element = element;
      this.button = parent;
      this.element.addEventListener("click", () => {
        this.disappear();
      });
    }
    disappear() {
      this.element.classList.add("Button--Disappear");
    }
  }

class Buttons {
    constructor(element) {
        this.element = element;
        this.button = element.querySelectorAll(".Button");
        this.button = Array.from(this.button).map((buttons) => {
          return new Button(buttons, this);
        });
      }
}
let buttons = document.querySelectorAll(".Buttons");
buttons = Array.from(buttons).map(buttons => new Buttons(buttons));