class Carousel {
  constructor(element, items) {
    // Carousel and each carousel item in array format
    this.element = element;
    this.items = Array.from(items).map(item => new CarouselItem(item));
    this.focusIndex = 0;
    // Arrow elements and listeners
    this.leftArrow = this.element.children[0];
    this.rightArrow = this.element.children[2];
    this.leftArrow.addEventListener('click', () => {
      this.items[0].moveLeftOut();
    });
    this.rightArrow.addEventListener('click', () => {
      this.items[0].moveRightOut();
      console.log(this.items[this.items.length - 1]);
      this.items[this.items.length - 1].moveRightIn();
    });
  }

  shiftLeft() { // Left arrow clicked
    console.log('left');
  }

  shiftRight() { // Right arrow clicked
    console.log('right');
  }
}

class CarouselItem {
  constructor(element) {
    this.element = element;
    this.parent = element.parentNode;
  }

  moveRightOut() { // Move out and to the right while fading out
    const ownWidth = this.getOwnWidth();
    const parentWidth = this.getParentWidth();
    // Modify margin based on parent width
    this.element.style.marginRight = `-${Number(parentWidth.slice(0, -2)) * 2}px`;
    this.fadeOut();
    // Wait until animation is done then remove from screen
    setTimeout(() => {
      this.element.className = 'Carousel__item';
      this.reset();
    }, 2000);
  }

  moveRightIn() { // Move in and to the right while fading in
    const ownWidth = this.getOwnWidth();
    const parentWidth = this.getParentWidth();
    // Move off screen to the left and set opacity to 0
    this.element.style.marginLeft = `-${Number(parentWidth.slice(0, -2)) * 2}px`;
    this.fadeOut();
    // After other item has left screen
    setTimeout(() => {
      // Display element and transition to default position
      this.element.style.margin = 'auto';
      this.fadeIn();
      this.element.classList.add('Carousel__item-focused');
    }, 2000);
  }

  moveLeftOut() { // Move out and to the left while fading out
    const ownWidth = this.getOwnWidth();
    const parentWidth = this.getParentWidth();
    // Modify margin based on parent width
    this.element.style.marginLeft = `-${Number(parentWidth.slice(0, -2)) * 2}px`;
    this.fadeOut();
    // Wait until animation is done then remove from screen
    setTimeout(() => {
      this.element.className = 'Carousel__item';
      this.reset();
    }, 2000);
  }

  fadeIn() { // Set opacity to 1
    this.element.style.opacity = 1;
  }

  fadeOut() { // Set opacity of 0
    this.element.style.opacity = 0;
  }

  reset() { // Reset modified styles
    this.element.style.margin = 'auto';
    this.element.style.opacity = 1;
    this.width = 'auto';
  }

  toggleTransition(option) {
    // To be added
  }

  getOwnWidth() { // Detect own width to prevent resizing
    var computedStyle = window.getComputedStyle(this.element);
    return computedStyle.getPropertyValue('width');
  }

  getParentWidth() { // Detect parent with for move distance
    var computedStyle = window.getComputedStyle(this.parent);
    return computedStyle.getPropertyValue('width');
  }
}

// DOM references
let carousels = document.querySelectorAll(".Carousel");
let carouselItems = document.querySelectorAll('.Carousel__item');
carousels = Array.from(carousels).map(carousel => new Carousel(carousel, carouselItems));

// // Entire carousel
// let carousels = document.querySelectorAll(".Carousel");
// //console.log(carousels);
// carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
// // Individual carousel items
// let carouselItems = document.querySelectorAll('.Carousel__item');
// //console.log(carouselItems);
// carouselItems = Array.from(carouselItems).map(item => new CarouselItem(item));





// const carouselItems = document.querySelector('.Carousel__items');

// for (let i = 0; i < carouselItems.children.length; i++) {
//   carouselItems.children[i].addEventListener('click', function() {
//     // Fade out first item
//     var elComputedStyle = window.getComputedStyle(this),
//         elWidth = elComputedStyle.getPropertyValue('width');
//     this.style.width = elWidth;
//     var pComputedStyle = window.getComputedStyle(this.parentNode),
//         pWidth = pComputedStyle.getPropertyValue('width');
    
//     this.style.marginLeft += pWidth;
//     this.style.opacity = 0;
//     this.classList.add('Carousel__items-fadeRight');
//     setTimeout(() => {
//       console.log(carouselItems.children[i]);
//       carouselItems.children[i].className = 'Carousel__item';
//     }, 2000);

//     // Fade in next item
//     const lastChild = carouselItems.children[carouselItems.children.length - 1];
//     console.log(carouselItems.children[carouselItems.children.length - 1]);
//     var lastComputedStyle = window.getComputedStyle(this),
//         lastWidth = lastComputedStyle.getPropertyValue('width');
//     lastChild.style.marginLeft = `-${pWidth}`;
//     lastChild.classList.add('Carousel__items-fadeRight');
//     lastChild.classList.add('Carousel__item-focused');
//     lastChild.style.marginLeft = 0;
//     lastChild.style.opacity = 1;
//     console.log(lastChild);
//   })
// }

// //console.log(carouselItems.children)