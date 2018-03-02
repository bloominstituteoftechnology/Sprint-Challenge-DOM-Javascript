class Button {
  constructor(element) {
    this.element = element;

    element.addEventListener('click', () => {
      element.classList.add('Button--gone');
    });
  }
}

let buttons = document.getElementsByClassName('Button');
// console.log(buttons);
buttons = Array.from(buttons).map(item => new Button(item));
// console.log(buttons);