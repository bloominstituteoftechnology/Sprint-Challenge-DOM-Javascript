class Carousel {
    carousel = (function(){
        let box = document.querySelector('.Carousel__item-focused');
        let next = box.querySelector('.Carousel__arrow-right ');
        let prev = box.querySelector('.Carousel__arrow-left');
        let items = box.querySelectorAll('.Carousel__item');
        let counter = 0;
        let amount = items.length;
        let current = items[0];
        box.classList.add('active');
        function navigate(direction) {
          current.classList.remove('.Carousel__item-focused');
          counter = counter + direction;
          if (direction === -1 && 
              counter < 0) { 
            counter = amount - 1; 
          }
          if (direction === 1 && 
              !items[counter]) { 
            counter = 0;
          }
          current = items[counter];
          current.classList.add('.Carousel__item-focused');
        }
        next.addEventListener('click', function(ev) {
          navigate(1);
        });
        prev.addEventListener('click', function(ev) {
          navigate(-1);
        });
        navigate(0);
      })();
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(Carousel).map(Carousel => new Carousel(Carousel));


