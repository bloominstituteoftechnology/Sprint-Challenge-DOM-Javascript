const buttons = document.querySelectorAll('Button');



buttons.forEach(function(button) {
  button.addEventListener('click', vanish);
});