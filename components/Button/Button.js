class Butt {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => this.togclick());
    }
    togclick() {
        this.element.classList.toggle('Button--bye');
    }
}

let butto = document.querySelectorAll('.Button');
butto = Array.from(butto).map(butto => new Butt(butto));
