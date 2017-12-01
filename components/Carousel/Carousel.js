class Carousel {
constructor(element) {
    this.element= element;
}

select() {
    this.element.classList.add('Carousel__item');
    this.Carousel.select();
}
deselect (){
    this.element.classList.remove('Carousel__item')
    this.Carousel.deselect();
}
// I assumed i needed to make classes for these functions to work but I could be far off subject of what you were looking for. 
class Carousel__arrow-left {

}

class Carousel__arrow-right{
    

class Carousel__items {

}

class Carousel__item {    

}


let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

//I need to understand more what is needed from me on this. I barely grasped on the tabs creation and this is just to advanced for me right meow. 