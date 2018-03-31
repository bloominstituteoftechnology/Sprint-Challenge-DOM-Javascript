/* PLAN OF ATTACK********************************************************************************************************
we pass in the .Carousel class into the constructor as an array,
when assign the carousel
when we click the button think there should be a different function fired for each button.
one decrements a counter and one increments it.
inside the decrements function there should have an if statment,
inside of the argument for the if it should see if the counter is -1 if the counter is then it should just set it to 2,
so then it will grab the last index in the array.
there needs to be a set data that so we can use the counter with coercion to add the current counter number so it will select that one.
*/





class Carousel {
    constructor(carousel) {
        // setting the this carousel to the passed in value
        this.carousel = carousel;
        // asigning this.items as a nodelist of caroussel__item
        this.items = document.querySelectorAll('.Carousel__item');
        console.log(this.items)
        // assigning rightArrow to the carousel__arrow-right and the next line is for left
        this.rightArrow = carousel.querySelector('.Carousel__arrow-right');
        this.leftArrow = carousel.querySelector('.Carousel__arrow-left');
        // setting a counter that i can use to increment and decrement
        this.counter= 0;
        // adding an event listener for a click that fires the increment function,
        // when the right arrow is clicked
        this.rightArrow.addEventListener('click',() => {this.increment()});
        // Event listener for a click that fires the decrement function,
        // when the left arrow is clicked
        this.leftArrow.addEventListener('click',() => {this.decrement()});
      
          //obj[arrow.dataset.tab] = new TabLink(arrow);
          //return obj;
        }
//constructor
increment(){
    console.log('clicked')
   // we take the counter and increment it and use that to grab the next item and set the modifer of focused on it.
   this.items[this.counter].classList.remove('Carousel__item-focused');
  
     this.counter++;
        // this checks to see if the counter is equal to the length of the array if it is, it sets the counter to 0, basically this resets it.
     if(this.counter  === this.items.length){
        // this does not need to be set to length because 0 is always the first index no matter the size of the array.
     this.counter = 0;
     console.log("reset")
        }

    this.items[this.counter].classList.add('Carousel__item-focused');


    // then we increment the counter
   

}
decrement(){
    console.log('clicked')
    // we remove the current item and we remove the modifier of focused so that we can clear text. 

    this.items[this.counter].classList.remove('Carousel__item-focused');
   
    // we are decrementing the counter so we can add the next array item.
    this.counter--;
   
    // so when the counter goes to -1 it will basically reset to the end of the array
    if(this.counter  < 0){

  
      // this was set to equal 0 instead of the length, but this means you can add in more items into the array and it will scale.
        this.counter = this.items.length -1;
       console.log("reset")
        }
      
    this.items[this.counter].classList.add('Carousel__item-focused');
    // then we increment the counter
  

}
}//class
let carousels = document.querySelectorAll('.Carousel');
console.log(carousels);
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));