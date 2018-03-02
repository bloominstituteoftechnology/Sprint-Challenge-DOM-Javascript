class Button {
    constructor(element) {
      this.element = element;
    //   this.button = this.element.querySelector(".Dropdown__button");
  
      this.element.addEventListener("click", () => {
          this.hideContent();
      });
    }
  
    hideContent() {
      this.element.classList.toggle("Button--hidden");
    }
  }
  
  let buttons = document.querySelectorAll(".Button");
  buttons = Array.from(buttons).map(button => new Button(button));