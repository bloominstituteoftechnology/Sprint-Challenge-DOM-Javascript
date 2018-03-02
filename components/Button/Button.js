const buttons = document.getElementsByClassName('Buttons')[0];
console.log(buttons.children);

class Button {
  constructor(button) {
    this.button = button;
    this.button.addEventListener('mousedown', event => {
      this.button.style.visibility = "hidden";
    });
  }
}

const allButtons = Array.from(buttons.children).map(button => {
  return new Button(button);
});
