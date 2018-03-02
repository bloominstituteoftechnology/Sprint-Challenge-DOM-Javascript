// Pseudo Code:
// So I think you need to have three classes, Carousel, CarouselLink, and CarouselItem.  

// Attempt Using Only Material from Lambda:

// class CarouselItem {
//     constructor (element){
//         this.element = element;
//     }
//     select() {
//         // should use classList
//         this.element.classList.add('Carousel__item--focused')
//       }
    
//       deselect() {
//         // should use classList
//         this.element.classList.remove('Carousel__item--focused');
//       }
// }

// class CarouselLink {
//     constructor (element, parent) {
//         this.element = element;
//         this.carousel = parent;
//         this.slideItem = this.carousel.getTab(this.element.dataset.slide);
//         this.element.addEventListener('click', () => {
//       this.carousel.updateActive(this.element);
//       this.select();
//         });
//     }

//     select() {
//         // select the associated slide
//         this.slideItem.classList.add("Carousel__item-focused");
      
//       }
    
//       deselect() {
//         // deselect the associated slide
//         this.slideItem.classList.remove("Carousel__item-focused");
//       }
// }

// class Carousel {
//     constructor(element) {
//         this.element = element;
//         this.slides = element.querySelectorAll(".Carousel__item");
//         this.slides = Array.from(this.slides).map((slide) => {
//             return new CarouselSlide(slide, this);
//           });
//         this.init();
//         console.log(this.slides[0])
   
//     }

//     init() {
//         // select the first slide upon initialization
//         this.this.slides[0].select();
//       }

//     updateActive(newSlide) {
//     // deselect the old active link
//     this.this.slides[0].deselect();
//     // assign the new active link
//     this.this.slides[0] = newSlide;
//     }

//     getTab(data) {
//         return this.element.querySelector(`.Carousel__items[data-slide="${data}"]`);
//       }

// }

// let carousels = document.querySelectorAll(".Carousel");
// carousels = Array.from(carousels).map(carousel => new Carousel(carousel));







// ======== FROM simply-coded ASSIGNMENT ====== //

// /**
// @description
// 	Creates a slide-show (i.e. carousel) out of anything with the class "carousel". 
// @guide
// 	1. Add or link this script to the bottom of your body tag, or after the DOM has 
// 	   completely loaded.
// 	2. After this script, create a new object with the name of your choosing.
// 	:: var customName = new Carousel();
// 	3. If multiple carousels are desired wrap the elements with the "carousel" class 
// 	   in an element with an ID of your choosing, and then create the carousel objects.
// 	:: var customName1 = new Carousel("your1WrapperID");
// 	:: var customName2 = new Carousel("your2WrapperID");
// 	4. An object with no ID will control all carousels.
// 	5. Control the carousel with the functions: prev, next, stop, and slide.
// 	:: customName.next(); 		//shows the next element in the carousel.
// 	:: customName.prev(); 		//shows the previous element in the carousel.
// 	:: customName.next(1000); 	//plays the carousel forward at the rate desired in milliseconds.
// 	:: customName.prev(500); 	//plays the carousel backward at the rate desired in milliseconds.
// 	:: customName.stop(); 		//stops the carousel. using any other function will also stop the carousel.
// 	:: customName.slide(2); 	//shows the slide/more specifically the index provided by the argument. 
// 	6. Video guide: https://youtu.be/1Tge4HJA7gE
// @author		Jeremy England
// @company	SimplyCoded
// @revised	04-16-2016
// */
// // CAROUSEL OBJECT
function Carousel(containerID) {
	this.container = document.getElementById(containerID) || document.body;
	this.slides = this.container.querySelectorAll('.carousel');
	this.total = this.slides.length - 1;
	this.current = 0;
	
	// start on slide 1
	this.slide(this.current);
}
// NEXT
Carousel.prototype.next = function (interval) {
	(this.current === this.total) ? this.current = 0 : this.current += 1;
	
	this.stop();	
	this.slide(this.current);
	
	if(typeof interval === 'number' && (interval % 1) === 0) {
		var context = this;
		this.run = setTimeout(function() {
			context.next(interval);
		}, interval);
	}
};
// PREVIOUS
Carousel.prototype.prev = function (interval) {	
	(this.current === 0) ? this.current = this.total : this.current -= 1;
		
	this.stop();	
	this.slide(this.current);
	
	if(typeof interval === 'number' && (interval % 1) === 0) {
		var context = this;
		this.run = setTimeout(function() {
			context.prev(interval);
		}, interval);
	}
};
// STOP PLAYING
Carousel.prototype.stop = function () {
	clearTimeout(this.run);
};
// SELECT SLIDE
Carousel.prototype.slide = function (index) {	
	if (index >= 0 && index <= this.total) { 
		this.stop();
		for (var s = 0; s <= this.total; s++) {
			if (s === index) {
				this.slides[s].style.display = "inline-block"; 
			} else {
				this.slides[s].style.display = 'none';
			}
		}
	} else {
		alert("Index " + index + " doesn't exist. Available : 0 - " + this.total);
	}
};