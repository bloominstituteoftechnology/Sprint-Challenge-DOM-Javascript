const hideButton = (event) => {
    event.target.classList.add("Button-hide");
//    event.stopPropagation(); //not needed but I also tested this with Array and forEach commented out code
}
/*class Button {
    constructor() {
        this.buttons = Array.from(document.querySelectorAll(".Button"));
        this.buttons.forEach(() => addEventListener('click', hideButton));

        this.DropdownButton.addEventListener('click', this.toggleMenu.bind(this));
    }
}*/ // planned to implement a class if the simpler code had worked...

// buttons = Array.from(document.querySelectorAll(".Button")); //Propagates to upper divs for some reason...
// buttons.forEach(() => addEventListener('click', hideButton));

button1 = document.querySelector(".Button1");
button2 = document.querySelector(".Button2");
button3 = document.querySelector(".Button3");

button1.addEventListener('click', hideButton);
button2.addEventListener('click', hideButton);
button3.addEventListener('click', hideButton);
// Works but I don't understand why it's different from commented code above.