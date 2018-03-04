class Button {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => {
      this.element.style.display= 'none';
      //this.element.classList.add('Button--hide');
      //*Ivan's solution
    })
  }
}

let buttons = document.getElementsByClassName('Button');
buttons = Array.from(buttons).map(button => {
  return new Button(button);
});
console.log(buttons);


// document.getElementsByClassName('Button')[0].addEventListener('click',() => {
//   document.getElementsByClassName('Button')[0].style.display = 'none';
// });


// *Ivan's solution
// let buttons = document.querySelectorAll('.Button');
// buttons = Array.from(buttons).map(button => new Button(button));
// console.log(buttons);
