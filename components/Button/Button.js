class Button {
  constructor() {
    this.button = this.document.getElementsByClassName("Button");
    console.log(this.button);

    this.button.addEventListener("click", () => {
      this.hideButton();
    });
  }

  hideButton() {
    this.button.classList.toggle("Button--hide");
  }
}

let buttons = document.querySelectorAll(".Button");
