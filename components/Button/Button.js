buttons = document.querySelectorAll('.Button');

class ButtonElmToObj {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => {
      this.click();
    });
  }
  click() {
    this.element.classList.add('HideBtn');
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i] = new ButtonElmToObj(buttons[i]);
}
