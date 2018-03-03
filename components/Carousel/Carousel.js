// Game Plan:

// This assignment comes with the 'carousels' variable already assigned (see very bottom) to the element
// class ".Carousel" - there is only one in this case.
// Two classes need to be created to mirror the structure of index.html in an array format which
// allows you to manipulate elements and their associated classes.

// This code is based entirely (with a few organizational changes) on the work of Edward Manda (#CS8) - THANKS Edward!

class CarouselItem {
    constructor (element) {
        this.element = element
    }
    focus() {
        this.element.classList.add("Carousel__item--focused");
    }
    
    unfocus() {
        this.element.classList.remove("Carousel__item--focused")
    }
}

class Carousel {
    constructor (element) {
    this.element = element;
    // Grabs three elements with within 'element' (aka .Carousel) with class "Carousel__item".
    // For each of these items, a new instance of CarouselItem is made, so in the end you have
    // and array of THREE class object instances made from the CarouselItem class blueprint.
    // ALSO - important to remember that each of these instances will also have BOTH the focus()
    // and unfocus() methods.
        // *REMEMBER* Each of these items has an index value (since they are in an array) - this
        // is going to be how you determine the ORDER that the carousel items are loaded.
    this.items = element.querySelectorAll(".Carousel__item");
    console.log(this.items)
    this.items = Array.from(this.items).map(carouselItem => new CarouselItem(carouselItem));

    // DEFAULT settings:
    // For itemIndex once page is loaded - start at 0 (first item)
    this.itemIndex = 0; // Not sure how I feel about this...you could get rid of it :/
    // this will be the initial item focused on
    this.focusItem = this.items[this.itemIndex];
    // Short hand for: Add "Carousel__item--focused" style to this.items[index of current box in view]
    this.focusItem.focus();

    // carouselItemLength property added and set equal to the length of the this.items array
    this.carouselItemLength = this.items.length;
    
    // Getting and Setting Up EventListener on Arrows

        // Left Arrow
        this.leftArrow = element.querySelector('.Carousel__arrow-left');
        this.leftArrow.addEventListener('click', () => {
            // If carousel is on Box 1, then reassign to last item in array, otherwise decrement.
            this.leftArrowClicked();
            this.updateCarousel();
        });

        // Right Arrow
        this.rightArrow = element.querySelector('.Carousel__arrow-right');
        this.rightArrow.addEventListener('click', () => {
            // If carousel is on the LAST carousel item, then index is reset to 0, otherwise increment.
            this.rightArrowClicked();
            this.updateCarousel();
        });

    }

    // When the left arrow is clicked, this JS ensures the order of indices: 0 2 1 0 2 1 etc.
    leftArrowClicked () {
        if (this.itemIndex === 0) {
            this.itemIndex = this.carouselItemLength - 1;
        } else {
            this.itemIndex--;
        }
    }

    // When the left arrow is clicked, this JS ensures the order of indices: 0 1 2 0 1 2 etc.
    rightArrowClicked () {
        if ( this.itemIndex === (this.carouselItemLength - 1)){
            this.itemIndex = 0;
        } else {
            this.itemIndex++;
        }

    }

    updateCarousel() {
        // unfocus the old focus Item
        this.focusItem.unfocus();
        // assign the new item focus
        this.focusItem = this.items[this.itemIndex];
        // focus on the item
        this.focusItem.focus();
    }

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
