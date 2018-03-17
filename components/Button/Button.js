class Button {
    constructor(element) {
      this.element = element;
      this.element.addEventListener("click", () => {
        this.toggleContent();
      });
    }
  
    toggleContent() {
      this.element.classList.toggle("Button--Away");
    }
  }
  
  let buttons = document.querySelectorAll(".Button");
  buttons = Array.from(buttons).map(button => new Button(button));