
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
        this.lastClassItem = new CarouselItem(this.lastClassItem); //Did not need CarouselItem
        this.element.addEventListener('click', () => {
            this.lastClass.changeItem(this);
            this.choose();
        });
    }

    choose() {
        this.element.classList.add("Carousel__item-set");
        this.lastClassItem.choose();
        // this.displayi.style.display = "block"  DOES NOT WORK, NOT CALLED
    }
    unchoose() {
        this.element.classList.remove("Carousel__item-set");
        this.lastClassItem.unchoose();
    }
}


class Carousel {
    constructor(element) {
        this.element = element;
        this.count = 0;
        this.displayi = document.querySelector(".Carousel__item");

        this.carouselItem = document.querySelectorAll(".Carousel__item");
        this.allItemsDefault = this.carouselItem;
        console.log(this.allItemsDefault);



        this.leftArrow = document.querySelector(".Carousel__arrow-left");
        this.leftArrow.addEventListener('click', () => {
            this.count--;
            if (this.count === -1) {
                this.count = 2;
                // alert('click left, count set to two: ' + this.count);               
            } else {
                // alert('click left, Diagnosing' + this.count);
            }
           
        });
        this.rightArrow = document.querySelector(".Carousel__arrow-right");
        this.rightArrow.addEventListener('click', () => {

            this.count++;
            if (this.count === 3) {
                this.count = 0;
                // alert('click right, count set to zero: ' + this.count);
            } else {
                // alert('click right, Diagnosing' + this.count);
            }

        });

        this.currentItem = this.carouselItem[0];
        this.carouselItem = Array.from(this.carouselItem).map((item) => {
            item.style.display = "none";
            this.rightArrow.addEventListener('click', () => {                
                item.style.display = "none";
                let index = document.querySelectorAll(".Carousel__item");
                if (this.count === 1) {
                    index[1].style.display = "block";
                } else if (this.count === 2) {
                    index[2].style.display = "block";
                } else {
                    index[0].style.display = "block";
                };
            });
            this.leftArrow.addEventListener('click', () => {
          
                item.style.display = "none";
                let index = document.querySelectorAll(".Carousel__item");
                if (this.count === 1) {
                    index[1].style.display = "block";
                } else if (this.count === 2) {
                    index[2].style.display = "block";
                } else {
                    index[0].style.display = "block";
                };
            });
            // return new ArrowLink(item, this); Didn't need the ArrowLink class, and class above ArrowLink
        });
        this.default()
    };
    rightClick() {
        this.rightArrow.addEventListener('click', () => {


        });
    }
    default() { //does get called properly

        this.currentItem.style.display = "block";

    }
    changeItem(newItem) {

        this.currentItem.unchoose();
        this.currentItem = newItem;

    }

    getQuery(datasettab) {
        return this.element.querySelector(`.Box[data-tab="${datasettab}"]`);

    }
}

let carousels = document.querySelectorAll(".Carousel"); //container for carousels
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));