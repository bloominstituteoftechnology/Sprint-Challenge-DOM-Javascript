let buttons = document.querySelectorAll('.Button'); //r returns NodeList of 3 elements containing Button class

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('Button--hide');
    })
})