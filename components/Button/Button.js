let disappear = document.getElementsByClassName("Button");
disappear = Array.from(disappear).map(button => {
    button.addEventListener("click", () => {
        button.remove("Button");
    })
})


