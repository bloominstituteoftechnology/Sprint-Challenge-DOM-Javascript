const buttonOne = document.getElementById("Button1");
const buttonTwo = document.getElementById("Button2");
const buttonThree = document.getElementById("Button3");

function disappearOne() {
    const buttonOne = document.getElementById("Button1");
    if (buttonOne.style.visibility === "hidden") {
        buttonOne.style.display = "button";
    } else {
        buttonOne.style.visibility = "hidden";
    }
}

function disappearTwo() {
    const buttonTwo = document.getElementById("Button2");
    if (buttonTwo.style.visibility === "hidden") {
        buttonTwo.style.display = "button";
    } else {
        buttonTwo.style.visibility = "hidden";
    }
}

function disappearThree() {
    const buttonThree = document.getElementById("Button3");
    if (buttonThree.style.visibility === "hidden") {
        buttonThree.style.display = "button";
    } else {
        buttonThree.style.visibility = "hidden";
    }
}

