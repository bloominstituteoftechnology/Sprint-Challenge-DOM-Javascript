class Button {
  constructor(element) {
    this.element = element;

    element.parentElement.addEventListener('click', () => {
      event.target.classList.add('Button--gone');
    });
  }
}

let buttons = document.getElementsByClassName('Button');
console.log(buttons);
buttons = Array.from(buttons).map(item => new Button(item));
console.log(buttons);