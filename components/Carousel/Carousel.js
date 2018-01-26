class Carousel {
	constructor(mainElement){
		// assign parent/main element
		this.mainElement = mainElement;
		// retrieve carousel item
		this.viewItems = this.mainElement.querySelectorAll('.Carousel__item');
		// assign left arrow node to click event
		this.leftArrow = this.mainElement.querySelector('.Carousel__arrow-left').addEventListener('click', (event) => {
			this.updateCarousel(event);
      	event.stopPropagation();
   	});
		// assign right arrow node to click event
		this.rightArrow = this.mainElement.querySelector('.Carousel__arrow-right').addEventListener('click', (event) => {
			this.updateCarousel(event);
      	event.stopPropagation();
   	});
   	// assign current focused item to 0 for tracking
   	this.currentFocused = 0;
	}

	// update carousel method
	updateCarousel(event){
		if(event.target.dataset.arrow === 'right' && this.currentFocused === 2){
			this.viewItems[this.currentFocused].classList.remove('Carousel__item-focused');
			this.currentFocused = 0;
			this.viewItems[this.currentFocused].classList.add('Carousel__item-focused');
		}else if(event.target.dataset.arrow === 'right' && this.currentFocused < this.viewItems.length - 1){
			this.viewItems[this.currentFocused].classList.remove('Carousel__item-focused');
			this.currentFocused++;
			this.viewItems[this.currentFocused].classList.add('Carousel__item-focused');
		}

		if(event.target.dataset.arrow === 'left' && this.currentFocused === 0){
			this.viewItems[this.currentFocused].classList.remove('Carousel__item-focused');
			this.currentFocused = 2;
			this.viewItems[this.currentFocused].classList.add('Carousel__item-focused');
		}else if(event.target.dataset.arrow === 'left' && this.currentFocused > 0){
			this.viewItems[this.currentFocused].classList.remove('Carousel__item-focused');
			this.currentFocused--;
			this.viewItems[this.currentFocused].classList.add('Carousel__item-focused');
		}
	}
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));