const hideButton = (event) => {
    event.target.classList.add("Button-hide");
//    event.stopPropagation(); //not needed but I also tested this with Array and forEach commented out code
}

// buttons = Array.from(document.querySelectorAll(".Button")); //Propagates to upper divs
// buttons.forEach(() => addEventListener('click', hideButton));

button1 = document.querySelector(".Button1");
button2 = document.querySelector(".Button2");
button3 = document.querySelector(".Button3");

button1.addEventListener('click', hideButton);
button2.addEventListener('click', hideButton);
button3.addEventListener('click', hideButton);
// Works but I don't understand why it's different from commented code above.