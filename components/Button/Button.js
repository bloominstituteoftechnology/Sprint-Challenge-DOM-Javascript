class Disappear {
  constructor(element) {
    this.element = element;
    this.dataButton = element.dataset.button; //probably not needed
    this.element.addEventListener('click', (event) => {
      this.element.classList.add('Button--disappear'); //upon being clicked, button disappears
    });
  }
}

Array.from(document.querySelectorAll('.Button')).map(button => {
  new Disappear(button);
});
