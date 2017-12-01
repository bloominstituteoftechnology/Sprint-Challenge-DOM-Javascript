class Carousel {

  constructor(carousel) {

    this.carousel = carousel; //pull in everything 
    console.log(this.carousel);
    //index for the element to show.
    this.currentIndex = 0;


    this.items = Array.from(this.carousel.querySelectorAll(".Carousel__item"));
    this.itemsCount = this.items.length || 0;

    this.leftArrow = this.carousel.querySelector(".Carousel__arrow-left");
    this.leftArrow.addEventListener("click", event => {
      this.previous();
    });

    this.rightArrow = this.carousel.querySelector(".Carousel__arrow-right");
    this.rightArrow.addEventListener("click", event => {
        this.next();
      });
  }

  next() {

    //increase current index  and change focus
  }

  previous() {
      //decrease current index and change focus
  }
  

}

//let carousels = document.querySelectorAll(".Carousel");
//carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
