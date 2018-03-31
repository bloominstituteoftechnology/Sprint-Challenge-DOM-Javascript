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
    this.leftArrow.addEventListener('click', () => {
      this.moveLeft(this.items[this.focusIndex]);
      console.log(this.items[this.focusIndex]);
    });
    this.rightArrow.addEventListener('click', () => {
      this.moveRight(this.items[this.focusIndex]);
      console.log(this.items[this.focusIndex]);
    });

    this.startLeft(this.items[this.focusIndex]);
  }

  startRight(item) {
    item.updateWidths();
    item.element.style.marginRight = `-${item.parentWidth * 4}px`;
  }

  startLeft(item) {
    item.updateWidths();
    item.element.style.marginLeft = `-${item.parentWidth * 4}px`;
  }

  moveRight(item) {
    item.toggleTransition('on');
    item.updateWidths();
    item.element
    item.fadeIn();
    // If to the left then bring to center
    if (item.element.style.marginLeft !== '') {
      item.element.style.marginLeft = '';
    } else { // Otherwise move to right
      this.startRight(item);
    }
  }

  moveLeft(item) {
    item.toggleTransition('on');
    item.updateWidths();
    item.element
    item.fadeIn();
    // If to the right then bring to center
    if (item.element.style.marginRight !== '') {
      item.element.style.marginRight = '';
    } else { // Otherwise move to right
      this.startLeft(item);
    }
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

  reset() { // Reset modified styles
    this.element.style.margin = 'auto';
    this.element.style.opacity = 1;
    this.width = 'auto';
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
    this.parentWidth = Number(window.getComputedStyle(this.parent).width.slice(0, -2));
  }
}

// DOM references
let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));



// -v-vvv-v- Prototype of my above functionality -v-vvv-v- //

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