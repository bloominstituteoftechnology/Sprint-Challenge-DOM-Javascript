// None class method has carousel working
// let indexPosition = 0;
// let items = document.querySelectorAll(".Carousel__item");
// let arrayItems = Array.from(items);
// console.log(arrayItems);

// let leftArrow = document.querySelector(".Carousel__arrow-left");
// leftArrow.addEventListener('click', (event) => {
//     indexPosition += -1;
//     console.log('left button has been clicked!!!');
//     console.log(indexPosition);
//     if (indexPosition < 0) {
//         indexPosition = 0;
//         arrayItems.map(item => item.classList.remove("Carousel__item-focused"));
//         arrayItems[indexPosition].classList.add("Carousel__item-focused");
//     }
//     if (indexPosition > 2) {
//         indexPosition = 2;
//         arrayItems.map(item => item.classList.remove("Carousel__item-focused"));
//         arrayItems[indexPosition].classList.add("Carousel__item-focused");
//     } else {
//         arrayItems.map(item => item.classList.remove("Carousel__item-focused"));
//         arrayItems[indexPosition].classList.add("Carousel__item-focused");
//     }
// });

// let rightArrow = document.querySelector(".Carousel__arrow-right");
// rightArrow.addEventListener('click', (event) => {
//     indexPosition += 1;
//     console.log('right button has been clicked!!!');
//     console.log(indexPosition);
//     if (indexPosition < 0) {
//         indexPosition = 0;
//         arrayItems.map(item => item.classList.remove("Carousel__item-focused"));
//         arrayItems[indexPosition].classList.add("Carousel__item-focused");
//     }
//     if (indexPosition > 2) {
//         indexPosition = 2;
//         arrayItems.map(item => item.classList.remove("Carousel__item-focused"));
//         arrayItems[indexPosition].classList.add("Carousel__item-focused");
//     } else {
//         arrayItems.map(item => item.classList.remove("Carousel__item-focused"));
//         arrayItems[indexPosition].classList.add("Carousel__item-focused");
//     }
// }); 

class Carousel {
    constructor(element) {
        this.element = element;
        console.log(this.element);
        this.items = document.querySelectorAll(".Carousel__item");
        this.items = Array.from(this.items)
        console.log(this.items)
    
        this.indexPosition = 0;
    
        this.leftArrow = document.querySelector(".Carousel__arrow-left");
        this.rightArrow = document.querySelector(".Carousel__arrow-right");
        console.log(document.querySelector(".Carousel__arrow-right"))

        this.leftArrow.addEventListener('click', (event) => {
            this.indexPosition -= 1;
            this.updateActive();
            console.log("left arrow has been clicked!")
            event.stopPropagation();
        });

        this.rightArrow.addEventListener('click', (event) => {
            this.indexPosition += 1;
            this.updateActive();
            console.log("right arrow has been clicked!")
            event.stopPropagation();
        });
    
        }

    lastItemIndex() {
        return this.items.length - 1;
    }

    updateActive() {
        if (this.indexPosition < 0) {
            this.indexPosition = 0;
            this.deselect();
            this.select();
            console.log(this.indexPosition);
        }
        if (this.indexPosition >= this.lastItemIndex()) {
            this.indexPosition = this.lastItemIndex();
            this.deselect();
            this.select();
            console.log(this.indexPosition);
        }
        if (this.indexPosition > 0 && this.indexPosition < 2) {
            this.deselect();
            this.select();
            console.log(this.indexPosition);
        }
    }

    select() {
        this.items[this.indexPosition].classList.add("Carousel__item-focused");
    }

    deselect() {
        this.items.map(item => item.classList.remove("Carousel__item-focused"));
    }

}
      
let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));



// need to create an array and then filter by position;
    // in an array [1,2,3] if right is clicked array would provide the item from index position +1
        // if no position exist then stay on current
    // in an array [1,2,3] if left is clicked array would provide the previous index (index-1)
        // if previous index doesn't exist then stay on current

