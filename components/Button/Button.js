
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