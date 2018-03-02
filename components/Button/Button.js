let buttons = document.getElementsByClassName("Button");

let buttonClicked = function(e) {
	e.style.display = "none";

}
Array.from(buttons).forEach( (e)=> {
	e.addEventListener("click", function() {
		buttonClicked(e);
	});
});
