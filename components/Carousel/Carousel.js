  // let slider = document.querySelector('Carousel__item-focused')
  let slides = document.querySelectorAll('Carousel__item');
  let r = document.getElementById('R');
  let l = document.getElementById('L');
  let current = slides[0];
  
  function previous() {
  slides[current - 1];
  current--;
  }
  
  function next() {
    slides[current + 1];
    current++;
  }

// Previous
l.addEventListener('onclick', function() {
  console.log('clicked left');
  if (current === 0) {
    current = slides.length;
  }
  previous();
});

// Next
r.addEventListener('click', function() {
  console.log('clicked right');
  if (current === slides.length - 1) {
    current = -1;
  }
  next();
});




// let carousels = document.querySelectorAll(".Carousel");
// carousels = Array.from(carousels).map(carousel => new Carousel(carousel));