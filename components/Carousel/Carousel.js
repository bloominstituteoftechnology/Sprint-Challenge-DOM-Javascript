class CarouselItem {
	constructor(element) {
	  this.element = element;
	}
  
	select() {
	  this.element.classList.add("Carousel__item-focused");
	}
  
	deselect() {
	  this.element.classList.remove("Carousel__item-focused");
	}
  }
  
  class CarouselLink {
	constructor(element) {
	  this.element = element;
	  this.element.addEventListener('click', (event) => {
		event.carData = this.element.dataset.carousel;
	  });
	}
  }
  
  class Carousel {
	constructor(element) {
	  this.element = element;
  
	  // Attaches links with data-tab value as property
	  this.links = element.querySelectorAll(".links");
	  this.links = Array.from(this.links).reduce((obj, link) => {
		obj[link.dataset.carousel] = new CarouselLink(link);
		return obj;
	  }, {});
  
	  console.log(this.links);
  
	  // Attaches items with data-tab value as property
	  this.items = element.querySelectorAll(".Carousel__item");
	  this.items = Array.from(this.items).reduce((obj, item) => {
		obj[item.dataset.carousel] = new CarouselItem(item);
		return obj;
	  }, {});
	  console.log(this.items);
  
	  // Listens for a click event in its children or self
	  this.element.addEventListener('click', (event) => {
		if (event.carData) {
		  this.updateActive(event.carData);
		  event.stopPropagation(); 
		}
	  })
  
  
	  this.activeData = 1
	  this.updateActive(this.activeData);
	}
	
	updateActive(selected) {
	  if (selected === null) return;
	  let data = 1;
	  if (selected === 'left'){
		if (this.activeData == 1){
		  data = 3;
		}else{
		  data = this.activeData-1;
		}
	  }
  
	  if (selected==='right'){
		if (this.activeData == 3){
		  data = 1;
		}else{
		  data = this.activeData+1;
		}
	  }
	  this.items[this.activeData].deselect();
	  this.items[data].select();
	  this.activeData = data;
	}
  }
  
  // Getting a nodelist full of Carousel
  let carousels = document.querySelectorAll(".Carousel");
  //Getting instances of the Carousel class 
  carousels = Array.from(carousels).map(carousel => new Carousel(carousel));