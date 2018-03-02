let buttons = document.getElementsByClassName("Button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        function disappear () {
            if (buttons[i].style.display === "") {
                buttons[i].style.display = "none";
        } else {
            alert("No")
        }
        } disappear();
    });
}