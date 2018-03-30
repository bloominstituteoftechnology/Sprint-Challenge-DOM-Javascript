 

// let leftArrow = document.querySelector('.Carousel__arrow-left');
// console.log(leftArrow);
// let box2 = document.querySelector('.Box2')
// console.log(box2);
// carouselArry = Array.from(carousel.children);
// console.log(carouselArry);


// leftArrow.addEventListener('click', ()=>{
//  box2.style.dispaly ="block";
// })


let carousels = document.querySelectorAll(".Carousel");


class Carousel {
    constructor(element,index){
      this.index = index;
        
      this.element = element;
      this.element.addEventListener('click', () => {
      this.showText();
      })
      this.carouselItems = document.querySelectorAll(".Carousel__item");
     this.carouselItems = Array.from(this.carouselItems);
      console.log(this.carouselItems);
     this.newCarouselItems = Array.from(this.carouselItems).map((item,index)=> new CarouselItems(item, index));
        console.log(this.newCarouselItems);
    }

    showText() {
       
       this.newCarouselItems[this.index].toggleTexts();
    }
}

class CarouselItems {
    constructor(element,index){
         this.index = index;
        this.element = element;
       
        
        // console.log(this.index);
    }
   toggleTexts(){
      
    this.element[this.index][1].ClassList.toggle('Carousel__item')
   }
}


carousels = Array.from(carousels).map((carousel,index) => new Carousel(carousel,index));

