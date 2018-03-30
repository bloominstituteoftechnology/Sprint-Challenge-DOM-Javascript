class Button {
  constructor(element){
    this.element = element;
    this.element.addEventListener('click', (event) => {
      this.element.classList.add('Button--hide');
    });
  }
}

Array.from(document.querySelectorAll('.Button')).map(btn => {
  new Button(btn);
});
