class Button {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => {
      this.element.style.display= 'none';
    })
  }
}

let buttons = document.getElementsByClassName('Button');
buttons = Array.from(buttons).map(button => {
  return new Button(button)
});




// document.getElementsByClassName('Button')[0].addEventListener('click',() => {
//   document.getElementsByClassName('Button')[0].style.display = 'none';
// });
//
//
