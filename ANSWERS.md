** Questions
1. What is the DOM?
2. What is an event?
2. What is an event listener?

1. what is the DOM

The document object model is a tree like object representation of an html page. It provides an
api to interact with the webpage using javascript. This allows you to manipulate the webpage (add, remove, modify elements).

Every item in the dom tree is called a node and they start with document and usually have two
child node html that has two children head and body and this spread out tree like to contain the whole
page structure and content.

We use the document object and it's methods to manipulate the dom.
Here are some examples of Js dom manipulation

const h1 = document.createElement('h1')  
h1.textContent = 'Hello world!'  // add some text
h1.classList.add('hello') // adds css class hello to element h1

Find elements :
document.getElementById() /getElementsByClassName also byId
by querySelector document.querySelector(".class_name") or (."id_name")
also by attribute document.querySelector("header[data-info = product-header]")
