class Carousel {
  
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
