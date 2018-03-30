class Button {
  constructor(button) {
    this.button = button;
    this.button.addEventListener('click', () => this.dissapear());
  }

  dissapear() {
    this.button.classList.add('dissapear');
  }
}

let buttons = Array.from(document.querySelectorAll('.Button')).map(button => new Button(button));


