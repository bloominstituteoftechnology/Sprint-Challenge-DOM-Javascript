## Questions
1. What is the DOM?

    DOM = Document Object Model. It defines 
        - HTML elements as objects
        - The properties of all HTML elements
        - The methods to access all HTML elements
        - The events for all HTML elements

    It utilizes a Tree Structure to categorize the elements of an HTML document, such as:
        - Root: `<html>`
        - Branches:
            - `<head>`
            - `<body>`
            - `<title>`
            - Anchor `<a>`, Attribute: `href`, Attribute: Text `My link`
            - etc.

2. What is an event?

    An event is a user interaction with an element in an HTML document. The most common is `click`, when a user clicks on a button for instance. Other events include `mouseover`, when a user hovers over an element without clicking on it; `mouseout`, when a user moves their pointer from an element to another element of the page; and `resize`, when a user clicks and drags the boundary of an element such as a text input portion of a form. There are others as well. 

3. What is an event listener?

    An event listener calls a function when an event occurs. It can pass parameters to the function as well. 

    More than one event listener can be attached to a single element of a page. You may want different behavior for `mouseover` and `click`, for instance. (MAYBE!)