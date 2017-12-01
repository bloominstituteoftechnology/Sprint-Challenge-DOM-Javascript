class Carousel {

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

// /* Simple JS Functions */
// const slideArr = [1, 2, 3];
// const leftSlide = (arr) => {
//   let slide;
//   for (let i = arr.length - 1; i >= 0; i--) {
//      slide = arr[i];
//      console.log(slide);
//   }
// }

// const rightSlide = (arr) => {
//   let slide;
//   for (let i = 0; i < arr.length; i++) {
//      slide = arr[i];
//      console.log(slide);
//   }
// }