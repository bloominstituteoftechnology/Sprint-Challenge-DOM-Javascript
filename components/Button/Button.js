class Button {
    constructor(element) {
      this.element = element;
      this.button = this.element.querySelector(".Button");
  
      this.button.addEventListener("click", () => {
        this.disappear();
      });
    }
  
    disappear() {
      this.element.classList.add(".Button--Disappear");
    }
  }
  
   let buttons = document.querySelectorAll(".Buttons");
   buttons = Array.from(buttons).map(buttons => new Button(buttons));