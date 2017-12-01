class Carousel {
   constructor(element){
     this.element = element;
     

     select() {

     }

     unselect() {

     }

     

   }
}
class Navigate { //takes in left or right direction and moves
	constructor (element) {
		this.element = element;
	}
        this.direction = element.querySelectorAll('Carousel__items');
     }



let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));