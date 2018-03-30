class Buttons {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector(".Button__button");

    this.button.addEventListener("click", () => {
      console.log("clicked");
      this.toggleContent();
    });
  }

  toggleContent() {
    this.element.classList.toggle("Button--selected");
  }
}

let buttons = document.querySelector('.Button');
buttons = Array.from(buttons).map(button => new Button(button));