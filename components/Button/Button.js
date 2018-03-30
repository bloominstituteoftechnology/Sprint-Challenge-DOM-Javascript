class Button {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.add('Button__Disappear');
    }
    
    deselect() {
        this.element.classList.remove('Button__Disappear');
    }
}