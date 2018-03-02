let right = document.getElementsByClassName("Carousel__arrow-right")[0];
let left = document.getElementsByClassName("Carousel__arrow-left")[0];
let activeItem = document.getElementsByClassName("Carousel__item-focused")[0];
let counter = 0;

right.addEventListener("click",function() {
	if(parseInt(activeItem.dataset.number) === 2){
		counter = 0;
		let current = document.getElementsByClassName("Carousel__item")[counter];
		activeItem.classList.remove("Carousel__item-focused");
		current.classList.add("Carousel__item-focused");
		activeItem = current;
	}
	else{
		counter++;
		let current = document.getElementsByClassName("Carousel__item")[counter];
		activeItem.classList.remove("Carousel__item-focused");
		current.classList.add("Carousel__item-focused");
		activeItem = current;
	}
});

left.addEventListener("click",function() {
	if(parseInt(activeItem.dataset.number) === 0){
		counter = 2 
		let current = document.getElementsByClassName("Carousel__item")[counter];
		activeItem.classList.remove("Carousel__item-focused");
		current.classList.add("Carousel__item-focused");
		activeItem = current;
	}
	else{
		counter--;
		let current = document.getElementsByClassName("Carousel__item")[counter];
		activeItem.classList.remove("Carousel__item-focused");
		current.classList.add("Carousel__item-focused");
		activeItem = current;
	}
});
