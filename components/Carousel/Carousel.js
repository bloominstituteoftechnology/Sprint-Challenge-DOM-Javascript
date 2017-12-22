class Carousel {
    constructor (element) {
        this.element = element;
        this.boxes = element.querySelectorAll(".Carousel__item");
        // select all items that are in the carousel and make an array to make methods of switching between items within
        // reduce boxes into an iterable array
        this.boxes = [].from(this.boxes).reduce((obj, item) => {
            
        })
        this.activeBox = activeBox(boxes[0]);
        // need a way to attach arrows to the methods
        this.rightArrow = element.querySelector(".Carousel__arrow-right");
        this.leftArrow = element.querySelector(".Carousel__arrow-left");
    }

    activeBox(newBox) {
        // change the current active box
        this.activeBox.classList.remove("Carousel__item-focused");
        this.activeBox = newBox;
        this.activeBox.classList.add("Carousel__item-focused");
    }

    moveRight() {
        // move carousel to the right and change active div
        // check if at the end and if so loop back to the first item in the carousel
        if (indexOf(this.activeBox) === this.boxes.length) {
            this.activeBox(this.boxes[0]);
        }
        this.activeBox(boxes[indexOf(this.activeBox) + 1])
    }

    moveLeft() {
        // move carousel to the left and change active div
        // check if at the beginning and if so loop back to the last item in the carousel
        if (indexOf(this.activeBox) === 0) {
            this.activeBox(this.boxes[this.boxes.length - 1]);
        }
        this.activeBox(boxes[indexOf(this.activeBox) - 1]);
    }

    rightArrow() {
        // event listener to initialize movement right when arrow is clicked
        this.rightArrow.addEventListener('click', () => {
            this.moveRight();
        })
    }

    leftArrow() {
        // event listener to initialize movement left when arrow is clicked
        this.leftArrow.addEventListener('click', () => {
            this.moveLeft();
        })
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));