
class Carousel {
    constructor(element) {
        this.element = element;
        this.items = element.querySelectorAll(".Carousel__items");
        //this.arrowR = element.querySelectorAll(".Carousel__arrow-right")
        // this.arrowL = element.querySelectorAll(".Carousel__arrow-left")
        this.items = Array.from(this.items).map((item) => {
            return new CarouselItems(item, this);
        })
       
        //event listener for clicking
         element.addEventListener('click' , (test) => {
            // console.log('I was pushed');

            // console.log(this.arrowR);
            let x = event.screenX;
            // console.log(test);
            // console.log(x);

            if(x < 60) {
                // console.log("I am greater than 50!");
                this.moveLeft();
            }
            else if (x > 590) {
                //console.log("I am less than 50!")
                this.moveRight();
            }
            else {
                //do nothing
            }
        })

    }

    //left arrow 
    moveLeft() {
        console.log("Left arrow was pushed");
    }

    //right arrow
    moveRight() {
        console.log("Right arrow was pushed");
    } 

}

class CarouselItems {
    constructor(element) {
        this.element = element; 
        this.item = element.querySelectorAll(".Carousel__item");
        this.item = Array.from(this.item).map((item) => {
            return new CarouselItem(item,this);
        })
        console.log("CarouselItems is being called. ")
    }
}



class CarouselItem {
    constructor(element) {
        this.element = element;
        console.log("CarouselItem is being called. ") // this gets called once for each time = 3
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));