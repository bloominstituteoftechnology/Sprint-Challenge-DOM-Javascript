
class CarouselItem {
    constructor(element){
        this.element = element;
    }

    select(){
        this.element.classList.add("Carousel__item-focused");
    }

    deselect(){
        this.element.classList.remove("Carousel__item-focused");
    }
}

class CarouselLeft{
    constructor(element){
        this.element = element;
        this.element.addEventListener('click',(event) =>{
            event.data = 0;
        })
    }
}
class CarouselRight{
    constructor(element){
        this.element = element;
        this.element.addEventListener('click',(event) =>{
            event.data = 1;
        })
    }
}

class Carousel {
    constructor(element){
        this.element = element;
        console.log(this.element)
        // Get Array of all the carousel items
        this.carouselitems = this.element.querySelectorAll('.Carousel__item');
        this.carouselitems = Array.from(this.carouselitems);
        // Find which carousel item is active and find its index
        this.active = this.element.querySelector('.Carousel__item-focused');
        this.activeindex = this.carouselitems.indexOf(this.active);
        this.left = new CarouselLeft(this.element.querySelector('.Carousel__arrow-left'));
        this.right = new CarouselRight(this.element.querySelector('.Carousel__arrow-right'));
        this.element.addEventListener('click',(event) => {
            console.log(event.data)
            console.log(this.activeindex);
            if(event.data === 0 || event.data === 1) {
                this.updateitem(event.data);
                event.stopPropagation();
            }    
        })
    }
    updateitem(data) {
        if(data === 1 && this.activeindex < this.carouselitems.length-1) {
            console.log('moving right')
            let current = new CarouselItem(this.active);
            current.deselect();
            let next = new CarouselItem(this.carouselitems[this.activeindex+1]);
            next.select();  
        }
        if(data === 0 && this.activeindex > 0) {
            console.log('moving left');
            let current = new CarouselItem(this.active);
            current.deselect(); 
            let previous = new CarouselItem(this.carouselitems[this.activeindex-1]);
            previous.select();  
        }
        this.active = this.element.querySelector('.Carousel__item-focused');
        this.activeindex = this.carouselitems.indexOf(this.active);
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));