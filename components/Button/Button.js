let buttons = document.getElementsByClassName("Button");
buttons = Array.from(buttons).map(button => {
    button.addEventListener("click", () => {
        button.classList.add("Button-hidden");
    })
})