const buttons = document.querySelectorAll('Button');
/*
const vanish = (event) => {
  event.target.classList.toggle('vanish');
}

buttons.forEach(function(button) {
  button.addEventListener('click', vanish);
});
*/

class Buttons {
  constructor(elements) {
    this.elements = elements;
  }

  

  vanish(event) {
    this.event.target.classList.toggle('vanish');
  }


}
