const buttons = document.querySelectorAll('Button');
console.log(buttons);
const vanish = (element) => {
 element.classList.toggle('vanish');
}

buttons.forEach(function(button) {
  button.addEventListener('click', vanish(button));
});

