buttonOne = document.getElementsByClassName("Button")[0];
buttonTwo = document.getElementsByClassName("Button")[1];
buttonThree = document.getElementsByClassName("Button")[2];

buttonOne.addEventListener("click", (event) => {
    buttonOne.classList.add("Button-Ghost");
})

buttonTwo.addEventListener("click", (event) => {
    buttonTwo.classList.add("Button-Ghost");
})

buttonThree.addEventListener("click", (event) => {
    buttonThree.classList.add("Button-Ghost");
})