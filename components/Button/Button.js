class individualButton {
    constructor(element, parent) {
        this.element = element;
        this.parButton = parent; // don't think i need this
        this.element.addEventListener('mouseenter', () => {
            this.element.style.cursor = 'pointer';
        })
        this.element.addEventListener('click', () => {
            this.disappear();
        });
    };

    disappear() {
        this.element.classList.add('Button--selected')
    };
}

class Button {
    constructor(element) {
        this.element = element;
        this.myButton = element.querySelectorAll(".Button")
        this.myButton = Array.from(this.myButton).map((button) => {
            return new individualButton(button, this);
        });
    }
}

let button = document.querySelectorAll(".buttonGroup");
button = Array.from(button).map(button => new Button(button));

// I was dumb and made the buttons to behave like tabs initially

// class individualButton {
//     constructor(element, parent) {
//         this.element = element;
//         this.parButton = parent; // don't think i need this
//         this.element.addEventListener('mouseenter', () => {
//             this.element.style.cursor = 'pointer';
//             console.log(`this is working`)

//         })
//         this.element.addEventListener('click', () => {
//             this.parButton.updateActive(this);
//             this.select();
//         });
//     };

//     select() {
//         this.element.classList.add('Button--selected');
//     };

//     deselect() {
//         this.element.classList.remove('Button--selected');
//     }
// }

// class Button {
//     constructor(element) {
//         this.element = element;
//         this.myButton = element.querySelectorAll(".Button")
//         this.myButton = Array.from(this.myButton).map((button) => {
//             return new individualButton(button, this);
//         });
//         this.activeButton = this.myButton[0];
//         this.first()
//     }
    
//     first() {
//         this.activeButton.select();
//     }

//     updateActive(newActive) {
//         this.activeButton.deselect();
//         this.activeButton = newActive;
//     }
// }

// let button = document.querySelectorAll(".buttonGroup");
// button = Array.from(button).map(button => new Button(button));
