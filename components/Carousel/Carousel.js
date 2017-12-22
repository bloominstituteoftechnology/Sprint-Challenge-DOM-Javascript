class Carousel {
    constructor(element) {
        this.element = element; //after setting the constructor, you want select all of the carousel items
        this.items = element.querySelectorAll(".Carousel__item"); // next set the current item that is active to the first one
        this.activeItem = this.items[0]; // finally the current active needs to be set to 0
        this.activeIndex = 0;

        /* Start Left and right arrow functionality /*
        
        // grab both arrows
        this.left = element.querySelector(".Carousel__arrow-left");
        this.right = element.querySelector(".Carousel__arrow-right");

        //need to add event listeners for both arrows #updateactive



        //deselect current stuff
        this.deselect();

        // if else statement to make it go back to last item of carousel if left arrow is clicked on first image
        // and maybe else if that ment for clicking right arrow to cycle from end to beginning image (or just duplicate for else statement above but for right see which one works)
        // add a select and deselect at end to work on focus for carousel

        // taking a quick break to think through this and will try and come back to finish up
    }

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));