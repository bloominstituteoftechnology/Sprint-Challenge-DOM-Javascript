class Button {
  constructor(element, parent) {
    this.element = element;
    this.buttons = parent;
     
    this.element.addEventListener('click', () => {
      this.hidden();
    });

    this.element.addEventListener('mouseover', () => {
      this.dontShoot();
    });

    this.element.addEventListener('mouseout', () => {
      this.thankYou();
    });
  };
  
  hidden() {
    this.element.classList.add("Button--hidden");
  }

  dontShoot() {
    this.element.innerHTML='Don\'t shoot!';
  }

  thankYou() {
    this.element.innerHTML='Thank you!';
  }
}
  
class Buttons {
  constructor(element) {
    this.element = element;
    this.buttons = element.querySelectorAll(".Button");
    this.buttons = Array.from(this.buttons).map((btn) => {
      return new Button(btn, this);
    });
    this.buttonLink = this.buttons[0];
  }
}
  
let buttons = document.querySelectorAll(".Buttons");
buttons = Array.from(buttons).map(buttons => new Buttons(buttons));