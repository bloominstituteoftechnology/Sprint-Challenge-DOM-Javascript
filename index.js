const disButton = document.querySelectorAll(".Button");

disButton.forEach( (item) => {

    item.addEventListener("click", () => {
        item.classList.toggle("Button--clicked");
        console.log("test");
    });
});

