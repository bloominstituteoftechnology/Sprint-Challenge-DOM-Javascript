class Button {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', this.disappear);
  }
  
  //Adds the disappear class
  disappear() {
    this.classList.add('Button--disappear');
  }
}

//Grabs all elements of .Button and creates individual objects
let myButton = document.querySelectorAll('.Button');
myButton = Array.from(myButton).map(myButton => {return new Button(myButton)});