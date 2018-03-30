
class CarouselItem {
    constructor(element) {
        this.element = element;
    };
    choose() {
        this.element.classList.add("Box-set");
    }
    unchoose() {
        this.element.classList.remove("Box-set");
    }
}

class ArrowLink {
    constructor(element, parent) {
        this.element = element;
        this.lastClass = parent;

        this.lastClassItem = parent.getQuery(this.element.dataset.tab);
        this.lastClassItem = new CarouselItem(this.lastClassItem);
        this.element.addEventListener('click', () => {
            this.lastClass.changeItem(this);
            this.choose();
        });
    }

    choose() {
        this.element.classList.add("Carousel__item-set");
        this.lastClassItem.choose();
    }
    unchoose() {
        this.element.classList.remove("Carousel__item-set");
        this.lastClassItem.unchoose();

    }
}


class Carousel {
constructor(element) {
    this.element = element;
    this.displayi = document.querySelector(".Carousel__item");
    this.leftArrow = document.querySelector(".Carousel__arrow-left");
    this.leftArrow.addEventListener('click', () => {
        // let change = this.carouselItem.style.display = "block";
        // this.changeItem(change)
        alert('click left, Diagnosing')
        this.displayi.style.display = "none"
    });
    this.rightArrow = document.querySelector(".Carousel__arrow-right");
    this.rightArrow.addEventListener('click', () => {
        // let change = this.carouselItem.style.display = "block";
        // this.changeItem(change)
        alert('click right, Diagnosing')
        // alert('click left')
        this.displayi.style.display = "block"
    });
    this.carouselItem = document.querySelectorAll(".Carousel__item");
    this.carouselItem = Array.from(this.carouselItem).map((item) => {
        return new ArrowLink(item, this);
    });
    // this.currentItem = this.carouselItem[1] ;
    this.default()
};
default() {
            this.carouselItem.style.display = "block";

    this.currentItem.choose();
}
changeItem(newItem) {

    this.currentItem.unchoose();
    this.currentItem = newItem ;

}

getQuery(datasettab) {
    return this.element.querySelector(`.Box[data-tab="${datasettab}"]`);
    
}
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));