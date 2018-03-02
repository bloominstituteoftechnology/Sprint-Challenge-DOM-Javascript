const buttons = document.getElementsByClassName('Button');

Array.from(buttons).map(button => button.addEventListener('click', () => button.style.display = 'none'));