
let carouselIndex = 1;
carousel(carouselIndex);

function plusCarousel(n) {
  carousel(carouselIndex += n);
}

function currentCarousel(n) {
  carousel(carouselIndex = n);
}

function carousel(n) {
  let i;
  const slides = document.getElementsByClassName('Carousel__item');
  if (n > slides.length) {carouselIndex = 1}
  if (n < 1) {carouselIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[carouselIndex - 1].style.display = " inline-block";
}