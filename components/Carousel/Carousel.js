
// class Carousel {
//     constructor(element) {
//         this.element = element;
//         this.items = element.querySelectorAll(".Carousel__items");
//         //this.arrowR = element.querySelectorAll(".Carousel__arrow-right")
//         // this.arrowL = element.querySelectorAll(".Carousel__arrow-left")
//         this.items = Array.from(this.items).map((item) => {
//             return new CarouselItems(item, this);
//         })

//         this.activeItem = this.items[0];
//         this.init();
       
//         //event listener for clicking
//          element.addEventListener('click' , (test) => {
//             // console.log('I was pushed');

//             // console.log(this.arrowR);
//             let x = event.screenX;
//             // console.log(test);
//             // console.log(x);

//             if(x < 60) {
//                 // console.log("I am greater than 50!");
//                 this.moveLeft();
//             }
//             else if (x > 590) {
//                 //console.log("I am less than 50!")
//                 this.moveRight();
//             }
//             else {
//                 //do nothing
//             }
//         })

//     }

//     //left arrow 
//     moveLeft() {
//         console.log("Left arrow was pushed");
//         this.element.classList.add("Carousel__arrow-left");
//     }

//     //right arrow
//     moveRight() {
//         console.log("Right arrow was pushed");
//         this.element.classList.add("Carousel__arrow-right");
//     }
    
//     init() {
//         // select the first link and tab upon ititialization
//         this.activeItem.select();
//       }
    
//       updateActive(newActive) {
//         // deselect the old active link
//         this.activeItem.deselect()
//         // assign the new active link
//         this.activeItem = newActive;
//         this.activeItem.select();
//       }
    
//       getItem(data) {
//         // use the tab item classname and the data attribute to select the proper tab
//         return this.element.querySelector(`.Carousel__item[data-number="${data}"]`);
        
//       }

// }

// class CarouselItems {
//     constructor(element, parent) {
//         this.element = element; 
//         this.item = element.querySelectorAll(".Carousel__item");
//         this.items = parent;// attach parent to object
//         this.carouselItem = this.items.getItem(this.element.dataset.number);
//         this.carouselItem = new CarouselItem(this.carouselItem)
//         this.item = Array.from(this.item).map((item) => {
//             return new CarouselItem(item,this);
//         })
//         console.log("CarouselItems is being called.")
//         this.select();
//     }

//     select() {
//         // select this link

//         console.log("Select is being ran!");
//         //this.element.classList.add("Carousel__item-focused");
//         // select the associated tab
//      }
// }



// class CarouselItem {
//     constructor(element) {
//         this.element = element;
//         console.log("CarouselItem is being called.") // this gets called once for each time = 3
//         console.log(element);
//     }


// }

// let carousels = document.querySelectorAll(".Carousel");
// carousels = Array.from(carousels).map(carousel => new Carousel(carousel));