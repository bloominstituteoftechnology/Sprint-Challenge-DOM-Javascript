const button = document.getElementsByClassName(".Button");

const vanish = (element) => {
  element.classList.toggle('vanish');
}

button.addEventListener('click', vanish)

console.log(button);