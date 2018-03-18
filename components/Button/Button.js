class Button {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("click", () => this.hideButton(this.element));
  }

  hideButton(target) {
    target.style.display = "none";
  }
}

const buttons = document.querySelectorAll(".Button");
buttons.forEach((button) => new Button(button));
