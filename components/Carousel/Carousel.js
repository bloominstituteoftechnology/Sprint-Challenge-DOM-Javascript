// I found a nice carousel that is *— Inspired by the blazing fast, lightweight, cross-platform and crazy popular [Vanilla JS](http://vanilla-js.com/)  framework.*
// It can be found at: http://zoltantothcom.github.io/vanilla-js-carousel
// It was tempting to just install it into the page here and run with it. Especially since I am behind on this week's assignments.
// However, that isn't the assignment and it would result in a very messy codebase if a site became a jumble of features from github repos. (Although I suspect an alarming number of small company sites are just that.)
// So, the plan is to get the cheater code to work first, then completely refactor the code to work with our framework. Over the break. I'll be lucky to get pseudocode out today.
// The cheater code I found used a list to keep track of all the items in the carousel. I think either an array or object would allow for more extendability later: like using the same framework to display a lot of content in a small place on a page. 
// It also didn't use class, so that may make it not worth refactoring for this assignment. 

class Carousel {

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

