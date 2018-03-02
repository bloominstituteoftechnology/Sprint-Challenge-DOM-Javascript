class  Button { 
  constructor(element) {
    this.element = element;
    this.element.addEventListener("click", () => {
      this.element.classList.add("Button--selected");
    });
  }
}
let buttons = document.querySelectorAll(".Button");
button = Array.from(buttons).map(button => {
  return new Button(button)});
