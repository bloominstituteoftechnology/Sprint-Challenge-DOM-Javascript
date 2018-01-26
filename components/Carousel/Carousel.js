  class Carousel {
     constructor(element) {
		  this.element = element;
      this.carouselitems = element.querySelectorAll(".Carousel__item");
      this.activecarouselItem = this.carouselitems[0];
      this.activeCarouselIndex = 0;
       this.left = element.querySelector(".Carousel__arrow-left");
       this.right = element.querySelector(".Carousel__arrow-right");
       this.left.addEventListener("click", (event) => {
				 this.updateActive("right");
				 });

			 this.right.addEventListener("click", (event) => {
			 this.updateActive("right");
      });

	}

/*class CarouselArrowLeft { 
	 constructor(element) {
		 this.element = element;
		 this.carouselitems = element.querySelectorAll(".Carousel__item");
     this.activecarouselItem = this.caraouselitem[0];
		 this.activeCarouselIndex = 0;

		 this.left = element.querySelector(".Carousel__arrow-left");
		 this.left.addEventListener('click',(event) => {
			 this.updateActive("left");
     }
	} 
	}
 class CarouselArrowRight {
	 constructor(element) {
		 this.element = element;
		 this.right = newCarouselArrowRight(this.element.querySelector(".Carousel__arrow-right");
		 this.right.addEventListener('click', (event) => {
			 this.updateActive("right");
  }
}*/
 /*class Carousel {
	 constructor(element) {
	  this.element = element;
		this.carouselitems = element.querySelectorAll(".Carousel__item");
	  this.activecarouselItem = this.caraouselitem[0];
		this.activeCarouselIndex = 0;
		 this.left = element.querySelector(".Carousel__arrow-left");
				this.updateActive("left");
		 this.right = newCarouselArrowRight(this.element.querySelector(".Carousel__arrow-right");
        this.updateActive("right");
		}
}*/
  updateActive(CarouselArrow) {
	  if (CarouselArrow === null)
		 return;

		 this.deselect();

		 if (CarouselArrow === "left") {
		   if (this.activeCarouselIndex === 0) {
			    this.activeCarouselIndex = this.carouselitems.length - 1; {
				}
			  else {
					this.activeCarouselIndex--;
				}

			}
      else if (CarouselArrow === "right") {
				if (this.activeCarouselIndex = this.carouselitems.length - 1) {
					this.activeCarouselIndex = 0;
				}
				 else {
					 this.activeCarouselIndex++;
				}
			}
			this.activeCarouselItem = this.carouselitems[this.activeCarouselIndex];
			this.select();
		}

      select() {
       this.activeCarouselItem.classList.add("Carousel__item-selected");
      }
  
     deselect() {
      this.activeCarouselItem.classList.remove("Carousel__item-selected");
    }
  }

  
let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
