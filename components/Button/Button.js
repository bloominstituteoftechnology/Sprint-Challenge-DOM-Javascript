class Button {
    constructor(element, parent) {
      this.element = element;
      this.btns = parent;
     
      this.element.addEventListener('click', () => {
        this.hidden();
      });
    };
  
    hidden() {
      this.element.classList.add("Button--hidden");
    }
  }
  
  class Buttons {
    constructor(element) {
      this.element = element;
      this.btns = element.querySelectorAll(".Button");
      this.btns = Array.from(this.btns).map((btn) => {
        return new Button(btn, this);
      });
      this.btnLink = this.btns[0];
    }
  }
  
  let btnsClass = document.querySelectorAll(".Buttons");
  btnsClass = Array.from(btnsClass).map(btnsClass => new Buttons(btnsClass));