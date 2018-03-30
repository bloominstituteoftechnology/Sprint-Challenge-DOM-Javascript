button = document.querySelectorAll('.Button');
class buttonToObj {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => {
      this.click(this.element);
    });
  }
  click(element) {
    console.log(element);
    element.classList.add('HideBtn');
  }
}
button = Array.from(button).map((btn) => new buttonToObj(btn));
