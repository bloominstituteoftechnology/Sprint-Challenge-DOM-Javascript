// class Dropmenu {
//     constructor(element) {
//         this.element = element;
//         this.element.addEventListener('click', () => { this.dispL() });
//         pargraphExit.addEventListener('mouseover', () => { this.hideDisp() });
//     }
//     dispL() {
//         links.style.display = "block";
//     }
//     hideDisp() {
//         links.style.display = "none"
//     }
    
// }
// let clickEvent = document.querySelectorAll(".Header__dropdown");
// let moverEvent = document.querySelector(".Block__paragraph");
// // clickEvent = new Dropmenu(clickEvent);
// clickEvent = Array.from(clickEvent).map(item => {
//     return new Dropmenu(item);
// });
// // moverEvent = new Dropmenu(moverEvent);
// moverEvent = Array.from(moverEvent).map( item => {
//     return new Dropmenu(item);
// } );


class Action {
    constructor(element, parent) {
        this.element = element;
        this.hideClass = parent;
        this.hideClassItem = parent.getQuery(this.element.dataset.tab);
        this.element.addEventListener('click', () => {
            this.hideBtn()
        });
    }
    hideBtn() {
        this.element.classList.remove("Button");
        this.element.style.display = "none";
    }
}

class Hide {
    constructor(element) {
        this.element = element;
        this.button = document.querySelectorAll(".Button");
        button = Array.from(this.button).map((btn) => {
            return new Action(btn, this);
        })

    };

    getQuery(data) {
        return this.element.querySelector(`.Button[data-tab="${data}"]`)

    }
}

let clickBtn = document.querySelectorAll(".Section--full");
clickBtn = Array.from(clickBtn).map(item => {
    return new Hide(item);
})