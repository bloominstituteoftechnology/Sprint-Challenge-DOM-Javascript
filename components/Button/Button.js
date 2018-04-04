class Button {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', this.hide.bind(this))
  }
  hide() {
    this.element.classList.add('Button--hidden');
  }
}

const buttons = Array.from(document.querySelectorAll('.Button')).map((button) => new Button(button));