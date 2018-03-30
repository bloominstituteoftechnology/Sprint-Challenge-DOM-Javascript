
let hidingButtons = document.querySelectorAll(".Button");

class Button {
  constructor(element){
    this.element = element;
    this.element.addEventListener('click', () => {
      this.hide();
      console.log('click');
    });
  }

  hide(element) {
    this.element.classList.add("Button--hide");
    console.log('working');
  }

}

hidingButtons = Array.from(hidingButtons).map(hidingButtons => new Button(hidingButtons));
