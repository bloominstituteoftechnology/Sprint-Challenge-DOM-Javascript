let buttons = document.getElementsByClassName('Button');

const hider = function(event) {
    // event.target.removeAttribute(display);
    event.target.classList.add('Button-hide');
}


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', hider);
}