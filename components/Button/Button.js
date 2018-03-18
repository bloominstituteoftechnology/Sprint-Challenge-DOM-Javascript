const buttons = document.querySelectorAll('Button');

const vanish = () => {
  buttons.forEach(function(button) {
    button.classList.toggle('vanish');
  })
}

buttons.forEach(function(button) {
  button.addEventListener('click', vanish);
});

