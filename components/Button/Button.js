
class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => {this.disappear()});
    }

    disappear() {
        this.element.classList.add("Button--delete");
    }


}
class Appear {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => {this.reappear()});
        this.appear = document.querySelectorAll('.Button');    }
    reappear() {
        this.appear.classList.add("Button--add");
    }
}

let headerButton = document.querySelectorAll(".header--mod");
header = Array.from(headerButton).map( header => new Appear(header));

let buttons = document.querySelectorAll(".Button");
newButtons = Array.from(buttons).map( button => new Button(button));