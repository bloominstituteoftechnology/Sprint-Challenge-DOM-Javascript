// Grabs all elements with class name "Button" (3)
const buttons = document.getElementsByClassName("Button");
// Adds "display: none" to each "Button" element that is clicked
Array.from(buttons).forEach(button => button.addEventListener('click', () => button.style.display = 'none'));