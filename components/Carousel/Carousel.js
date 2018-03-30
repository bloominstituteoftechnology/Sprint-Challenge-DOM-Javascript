class Carousel {
  constructor(element, items) {
    // Carousel and each carousel item in array format
    this.element = element;
    this.items = Array.from(items).map(item => new CarouselItem(item));
    // Arrow elements and listeners
    this.leftArrow = element.children[0];
    this.rightArrow = element.children[2];
    this.leftArrow.addEventListener('click', this.clickLeft);
    this.rightArrow.addEventListener('click', this.clickRight);
  }

  clickLeft() { // Left arrow clicked
    console.log('left');
  }

  clickRight() { // Right arrow clicked
    console.log('right');
  }
}

class CarouselItem {
  constructor(element) {
    this.element = element;
    this.parent = element.parentNode;

    this.element.addEventListener('click', () => {
      this.moveLeft();
    });
  }

  moveRight() { // Move out and to the right and fade
    const ownWidth = this.getOwnWidth();
    const parentWidth = this.getParentWidth();
    // Allow for 2 second transitions
    this.element.classList.add('Carousel__item-transition');
    this.element.style.marginRight = `-${Number(parentWidth.slice(0, -2)) * 2}px`;
    this.fadeOut();
    // Wait until animation is done then remove from screen
    setTimeout(() => {
      this.element.className = 'Carousel__item';
      this.reset();
    }, 2000);
  }

  moveLeft() { // Move out and to the left and fade
    const ownWidth = this.getOwnWidth();
    const parentWidth = this.getParentWidth();
    // Allow for 2 second transitions
    this.element.classList.add('Carousel__item-transition');
    this.element.style.marginLeft = `-${Number(parentWidth.slice(0, -2)) * 2}px`;
    this.fadeOut();
    // Wait until animation is done then remove from screen
    setTimeout(() => {
      this.element.className = 'Carousel__item';
      this.reset();
    }, 2000);
  }

  fadeIn() { // Set opacity to 1
    this.style.opacity = 1;
  }

  fadeOut() { // Set opacity of 0
    this.element.style.opacity = 0;
  }

  reset() { // Reset modified styles
    this.element.style.margin = 'auto';
    this.element.style.opacity = 1;
    this.width = 'auto';
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