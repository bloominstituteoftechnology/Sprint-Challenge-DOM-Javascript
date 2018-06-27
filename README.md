# Assessing your Vanilla JS DOM Manipulation Fu
* Answers to your written questions will be recorded in *Answers.md* 
* This is to be worked on alone but you can use outside resources. You can *reference* any old code you may have, and documentation, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words.

## Questions
1. What is the DOM?
    DOM stands for Document Object Model. It represents the HTML document as a tree of objects that can be accessed and manipulated by programming languages (like JavaScript). It allows elements and styles on the page to be changed dynamically. 
2. What is an event?
    An event is an occurrence on the page that create an Event Object. These track user interaction with the page, and can be used to change the page or trigger code. 
3. What is an event listener?
    An event listener attaches a function to a particular triggering event. (Attaching button functionality to a click, for example). Event listeners are assigned to specific targets, but can trigger function higher on the tree as well (at the parent node, or the entire page).
4. What is a Constructor
    A constructor is a function that creates an object with specific functionality and parameters. When combined with a class, it allows for multiple copies of the same object to be created. (Multiple Animal objects to represent different animals, for example.)

## Challenge
Your Challenge is to make a simple `Button` component that hides when it's clicked. There will be three instances in the html. Make sure to give it a little styling of your own.

## Stretch Challenge
Your stretch challenge is to write the functionality of a `Caoursel` component. You have the HTML and CSS already in place. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. You may reference the `Tabs` component for assistance.

Example of a Carousel: https://v4-alpha.getbootstrap.com/components/carousel/#with-controls