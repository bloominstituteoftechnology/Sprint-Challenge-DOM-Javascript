const button = document.getElementsByClassName(".button");

const vanish = (element) => {
  element.classList.toggle('vanish');
}

button.addEventListener('click', vanish)

console.log(button);