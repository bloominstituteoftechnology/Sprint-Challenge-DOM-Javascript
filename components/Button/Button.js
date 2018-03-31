// Reference DOM elements
const buttons = document.querySelectorAll('.Button');

// Add event listener for each button
for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    this.parentNode.removeChild(this);
  })
  buttons[i].addEventListener('mousedown', function() {
    this.classList.add('Button-clicked');
  })
}

