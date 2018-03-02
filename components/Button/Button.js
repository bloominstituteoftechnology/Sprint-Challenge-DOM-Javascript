class Button {
  constructor(element) {
    this.element = element;

    this.element.addEventListener('click', () => {
      this.element.classList.add('Button--hidden');
    });
  }
}

let button1 = document.getElementsByClassName('Button')[0];
let button2 = document.getElementsByClassName('Button')[1];
let button3 = document.getElementsByClassName('Button')[2];

button1 = new Button(button1);
button2 = new Button(button2);
button3 = new Button(button3);
