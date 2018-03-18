const buttons = document.querySelectorAll('Button');

const vanish = (event) => {
  event.target.classList.toggle('vanish');
}

buttons.forEach(function(button) {
  button.addEventListener('click', vanish);
});

