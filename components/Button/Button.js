class Button {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => {
      this.element.classList.add('Button--hidden');
    });
  }
}

let buttons = document.getElementsByClassName('Button');
buttons = Array.from(buttons).map(button => new Button(button));