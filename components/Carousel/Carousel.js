class Carousel {
  constructor(element) {
    // Carousel and each carousel item in array format
    this.element = element;
    this.items = document.querySelectorAll('.Carousel__item');
    this.items = Array.from(this.items).map(item => new CarouselItem(item));
    this.focusIndex = 0;
    // Arrow elements and listeners
    this.controlsActive = true;
    this.leftArrow = this.element.children[0];
    this.rightArrow = this.element.children[2];

    // Swipe items to right and show item at index -1
    this.leftArrow.addEventListener('click', () => {
      if (this.controlsActive) {
        this.controlsActive = false;
        const previousItem = this.items[this.focusIndex];
        this.moveRight(this.items[this.focusIndex--]); // Move right and decrement focus index
        // Wrap index value around if needed
        if (this.focusIndex < 0) this.focusIndex += this.items.length;
        const nextItem = this.items[this.focusIndex];

        setTimeout(() => { // After a duration of time
          nextItem.toggleTransition('off'); // Do next fast
          this.moveLeft(nextItem); // Stage next item left of window
          previousItem.element.classList.remove('Carousel__item-focused');
          nextItem.element.classList.add('Carousel__item-focused'); // Transfer focus class
          nextItem.toggleTransition('on'); // Do next slow
          this.moveRight(nextItem); // Insert next item from left
        }, animationTime);
      }
    });

    // Swipe items to left and show item at index +1
    this.rightArrow.addEventListener('click', () => {
      if (this.controlsActive) {
        this.controlsActive = false;
        const previousItem = this.items[this.focusIndex];
        this.moveLeft(this.items[this.focusIndex++]); // Move left and increment focus index
        // Wrap index value around if needed
        if (this.focusIndex >= this.items.length) this.focusIndex = 0;
        const nextItem = this.items[this.focusIndex];

        setTimeout(() => { // After a duration of time
          nextItem.toggleTransition('off'); // Do next fast
          this.moveRight(nextItem); // Stage next item to right of window
          previousItem.element.classList.remove('Carousel__item-focused');
          nextItem.element.classList.add('Carousel__item-focused'); // Transfer focus class
          nextItem.toggleTransition('on'); // Do next slow
          this.moveLeft(nextItem); // Insert next item from right
        }, animationTime);
      }
    });
  }

  clearMargin(item) { // Clear any previous margin
    item.element.style.margin = '';
    item.element.style.marginLeft = '';
    item.element.style.marginRight = '';
  }

  positionRightOut(item) { // Move out of window to right
    this.clearMargin(item);
    item.element.style.marginRight = `-${item.parentWidth * 4}px`;
  }

  positionLeftOut(item) { // Move out of window to left
    this.clearMargin(item);
    item.element.style.marginLeft = `-${item.parentWidth * 4}px`;
  }

  moveRight(item) {
    item.toggleTransition('on'); // Activate transition time
    item.updateParentWidth(); // Set current width of parent
     // If item is centered
    if (item.element.style.margin === '' 
    && item.element.style.marginLeft === '' 
    && item.element.style.marginRight === '') {
      // Move out of window
      item.fadeOut();
      this.positionRightOut(item);
      // Clear margins for full reset after animation finished
      setTimeout(() => this.clearMargin(item), animationTime);
    } else { // Move into window
      item.fadeIn();
      this.clearMargin(item);
      // Prevent use of controls until all animations finish
      setTimeout(() => this.controlsActive = true, 1000);
    }
  }

  moveLeft(item) {
    item.toggleTransition('on'); // Activate transition time
    item.updateParentWidth(); // Set current widths for item and parent
    // If item is centered
    if (item.element.style.margin === '' 
    && item.element.style.marginLeft === '' 
    && item.element.style.marginRight === '') {
      // Move out of window
      item.fadeOut();
      this.positionLeftOut(item);
      // Clear margins for full reset after animation finishes
      setTimeout(() => this.clearMargin(item), animationTime);
    } else { // Move into window
      item.fadeIn();
      this.clearMargin(item);
      // Prevent use of controls until all animations finish
      setTimeout(() => this.controlsActive = true, 1000);
    }
  }
}

class CarouselItem {
  constructor(element) {
    this.element = element;
    this.parent = element.parentNode;
    this.parentWidth;
  }

  fadeIn() { this.element.style.opacity = 1 } // Set opacity to 1

  fadeOut() { this.element.style.opacity = 0 } // Set opacity of 0

  toggleTransition(option) { // Switch 2 second transitions on/off
    if (option === 'on' && !(this.element.classList.contains('Carousel__item-transition'))) {
      this.element.classList.add('Carousel__item-transition');
    } else if (option === 'off' && this.element.classList.contains('Carousel__item-transition')) {
      this.element.classList.remove('Carousel__item-transition');
    }
  }

  updateParentWidth() { // Update parent width to transition appropriately based on size
    // Convert width property into numerical values for later mutation
    this.parentWidth = Number(window.getComputedStyle(this.parent).width.slice(0, -2));
  }
}

// DOM references
let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

// Easily change all animation times from single variable
const animationTime = 1000;