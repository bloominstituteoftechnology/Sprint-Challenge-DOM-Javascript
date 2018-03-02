class Dissapear {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("click", () => {
      this.dissapear();
    });
  }
  
  dissapear() {
    this.element.classList.add("Button__hide");
  }
}

let buttons = document.getElementsByClassName("Button__son");
// console.log(buttons);
buttons = Array.from(buttons).map(button => new Dissapear(button));

console.log(buttons);