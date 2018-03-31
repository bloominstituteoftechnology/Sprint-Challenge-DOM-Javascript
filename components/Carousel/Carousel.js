class Carousel {
  constructor(element) {
    // Carousel and each carousel item in array format
    this.element = element;
    this.items = document.querySelectorAll('.Carousel__item');
    this.items = Array.from(this.items).map(item => new CarouselItem(item));
    this.focusIndex = 0;
    // Arrow elements and listeners
    this.leftArrow = this.element.children[0];
    this.rightArrow = this.element.children[2];

    // Swipe items to right and show item at index -1
    this.leftArrow.addEventListener('click', () => {
      const previousItem = this.items[this.focusIndex];
      this.moveRight(this.items[this.focusIndex--]); // Decrement index after move
      // Wrap index value around if needed
      if (this.focusIndex < 0) this.focusIndex += this.items.length;
      const nextItem = this.items[this.focusIndex];
      setTimeout(() => { // After a duration of time
        nextItem.toggleTransition('off'); // Do next fast
        this.moveLeft(nextItem);
        previousItem.element.classList.remove('Carousel__item-focused');
        nextItem.element.classList.add('Carousel__item-focused');
        nextItem.toggleTransition('on'); // Do next slow
        this.moveRight(nextItem);
      }, 1000)
    });
    // Swipe items to left and show item at index +1
    this.rightArrow.addEventListener('click', () => {
      const previousItem = this.items[this.focusIndex];
      this.moveLeft(this.items[this.focusIndex++]); // Increment index after move
      // Wrap index value around if needed
      if (this.focusIndex >= this.items.length) this.focusIndex = 0;
      const nextItem = this.items[this.focusIndex];
      setTimeout(() => { // After a duration of time
        nextItem.toggleTransition('off'); // Do next fast
        this.moveRight(nextItem);
        previousItem.element.classList.remove('Carousel__item-focused');
        nextItem.element.classList.add('Carousel__item-focused');
        nextItem.toggleTransition('on'); // Do next slow
        this.moveLeft(nextItem);
      }, 1000)
    });
  }

  positionRightOut(item) { // move out of window to right
    item.element.style.margin = ''; // clear any previous margin
    item.element.style.marginLeft = '';
    item.element.style.marginRight = '';
    item.element.style.marginRight = `-${item.parentWidth * 4}px`;
  }

  positionLeftOut(item) { // move out of window to left
    item.element.style.margin = ''; // clear any previous margin
    item.element.style.marginLeft = '';
    item.element.style.marginRight = '';
    item.element.style.marginLeft = `-${item.parentWidth * 4}px`;
  }

  moveRight(item) {
    item.toggleTransition('on'); // activate transition time
    item.updateWidths(); // set current widths for item and parent
     // if item is centered
    if (item.element.style.margin === '' 
    && item.element.style.marginLeft === '' 
    && item.element.style.marginRight === '') {
      // move out of window
      item.fadeOut();
      this.positionRightOut(item);
    } else { // otherwise
      // move into window
      item.fadeIn();
      item.element.style.margin = '';
      item.element.style.marginLeft = '';
      item.element.style.marginRight = '';
    }
  }

  moveLeft(item) {
    item.toggleTransition('on'); // activate transition time
    item.updateWidths(); // set current widths for item and parent
     // if item is centered
    if (item.element.style.margin === '' 
    && item.element.style.marginLeft === '' 
    && item.element.style.marginRight === '') {
      // move out of window
      item.fadeOut();
      this.positionLeftOut(item);
    } else { // otherwise
      // move into window
      item.fadeIn();
      item.element.style.margin = '';
      item.element.style.marginLeft = '';
      item.element.style.marginRight = '';
    }
  }
}

class CarouselItem {
  constructor(element) {
    this.element = element;
    this.elementWidth;
    this.parent = element.parentNode;
    this.parentWidth;
  }

  fadeIn() { // Set opacity to 1
    this.element.style.opacity = 1;
  }

  fadeOut() { // Set opacity of 0
    this.element.style.opacity = 0;
  }

  toggleTransition(option) { // Switch 2 second transitions on/off
    if (option === 'on' && !(this.element.classList.contains('Carousel__item-transition'))) {
      this.element.classList.add('Carousel__item-transition');
    } else if (option === 'off' && this.element.classList.contains('Carousel__item-transition')) {
      this.element.classList.remove('Carousel__item-transition');
    }
  }

  updateWidths() { // Convert width properties into numerical values for later mutation
    this.elementWidth = Number(window.getComputedStyle(this.element).width.slice(0, -2));
    if (isNaN(this.elementWidth)) this.elementWidth = 'auto'; // maintain auto if already set
    this.parentWidth = Number(window.getComputedStyle(this.parent).width.slice(0, -2));
  }
}

// DOM references
let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));