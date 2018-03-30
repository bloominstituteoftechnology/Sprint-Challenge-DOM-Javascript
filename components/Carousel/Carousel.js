 



let carousels = document.querySelectorAll(".Carousel");


class Carousel {
    constructor(el){
        this.element = el;
        this.leftArrow = document.querySelector('.Carousel__arrow-left');
        this.rightArrow = document.querySelector('.Carousel__arrow-right');
        this.items = document.querySelectorAll('.Carousel__items');
        this.index = 0;
        this.rightArrow.addEventListener ('click', ()=>{
            this.rightArrowHandler();
        })
        this.leftArrow.addEventListener('click', ()=>{
            this.leftArrowHandler();
        })
    }      
    rightArrowHandler(){
       
        this.index++;
       if (this.index++ === this.items.length) {
          return;
        }
       let  index = this.index;
        this.items[index].style.display = 'block';
        this.items[index].classList.toggle('Carousel__item-focused')
    } 

    leftArrowHandler(){
          this.index++;
        if (this.index === this.items.length) {
            return;
        }
        let  index = this.index;
        this.items[index].style.display = 'block';
        this.items[index].classList.toggle('Carousel__item-focused')
    }
}
carousels = Array.from(carousels).map((carousel) => new Carousel(carousel));


//         this.element = element;
//       this.element.addEventListener('click', () => {
//       this.showText();
//       })
//       this.carouselItems = document.querySelectorAll(".Carousel__item");
//      this.carouselItems = Array.from(this.carouselItems);
//       console.log(this.carouselItems);
//      this.newCarouselItems = Array.from(this.carouselItems).map((item,index)=> new CarouselItems(item, index));
//         console.log(this.newCarouselItems);
//     }

//     showText() {
       
//        this.newCarouselItems.toggleTexts();
//     }
// }

// class CarouselItems {
//     constructor(element,index){
//          this.index = index;
//         this.element = element;
       
        
//         // console.log(this.index);
//     }
//    toggleTexts(){
      
//     this.element[this.index].ClassList.toggle('Carousel__item')
//    }
// }


// carousels = Array.from(carousels).map((carousel,index) => new Carousel(carousel,index));

