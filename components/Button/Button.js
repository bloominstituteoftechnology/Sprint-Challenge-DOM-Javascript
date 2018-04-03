let buttons = document.querySelectorAll('.Button');

class Button {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => {
    (this.click());
    });
  }
  click() {
    this.element.classList.add('Button--hidden');
    console.log("please work");
  }
}

buttons = buttons.forEach(button => new Button(button));
