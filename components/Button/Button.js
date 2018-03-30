// Set up references to the DOM
const buttons = document.querySelectorAll(".Button");
//console.log(buttons)

class Button {
  constructor(element){
    this.element = element;
    this.element.addEventListener('click', () => {this.buttonClick();})
  }
  
  buttonClick(){
    this.element.classList.add('Button--selected')
  }
}

buttons = Array.from(buttons).map( button => new Button(button));
