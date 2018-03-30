

//create a buttons class
class Buttons { // enters here 3 times one for each
    constructor (element) {
        console.log("I am the buttons")
        this.element = element; //attaches the dom node to the object.
        this.buttons = element.querySelectorAll(".Button");
        this.buttons = Array.from(this.buttons).map((button) => {
            console.log("we are the buttons");
            return new Button(button, this);
        })
    }

    getButton(data) {
        // use the tab item classname and the data attribute to select the proper tab
        return this.element.querySelector(`.Button[data-number="${data}"]`);
      }
}

// creates a button 
class Button {
    constructor(element, parent) {
       // console.log("I was entered!");
        this.element = element; // attaches dom element to object
        this.buttons = parent; // attaches parent to object
        this.buttonsChosen = this.buttons.getButton(this.element.dataset.number);
        this.element.addEventListener('click', () => {
            console.log("I was pushed!");
            this.select();
        })
    }

    select() {
        //select this button
        this.element.classList.add("Button-selected");
    }

    deselect() {
        //select this button
        this.element.classList.remove("Button-selected");
    }
}




let buttons = document.querySelectorAll(".Button");
buttons = Array.from(buttons).map(buttons => new Buttons(buttons));

//const newclass = new Buttons();