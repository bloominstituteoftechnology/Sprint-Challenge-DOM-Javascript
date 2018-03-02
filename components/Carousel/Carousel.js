let counter = 0 % 3;
// counter = counter % 3;


class Carousel {
  constructor(element) {
    this.element = element;
    this.element.querySelector(".Carousel__arrow-right").addEventListener("click", () => {
      this.next();
      console.log('right arrow clicked');
    });
    this.element.querySelector(".Carousel__arrow-left").addEventListener("click", () => {
      this.previous();
      console.log('left arrow clicked');
    });
    
    
  }
  
  
  
  next() {
    if (counter >= 0 && counter < 3){
      counter++;
      this.element.querySelector(`#\\3${counter}`).classList.add("Carousel__item-focused");
      this.element.querySelector(`#\\3${counter-1}`).classList.remove("Carousel__item-focused");
      console.log(counter);
    }
    
    
  }
  
  previous() {
    if (counter >= 0 && counter < 3){
      counter--;
      this.element.querySelector(`#\\3${counter}`).classList.add("Carousel__item-focused");
      this.element.querySelector(`#\\3${counter+1}`).classList.remove("Carousel__item-focused");
    }

    
  }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

// console.log(carousels);