
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