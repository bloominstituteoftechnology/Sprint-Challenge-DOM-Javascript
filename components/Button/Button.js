let button = document.querySelectorAll(".Button");

for(let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        button[i].classList.toggle('Button--none')
    })
}
