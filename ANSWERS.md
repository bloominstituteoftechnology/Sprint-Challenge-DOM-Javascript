
# Sprint Challenge #3: DOM-JavaScript 

## Self Study Questions:

1. What is the DOM?
    *  `DOM` is an acronym for "Direct Object Model".  Although there exist other DOMs, the one most often referenced when the term is 
    used is the W3C standard for accessing documents (such as index.html, styles.css etc.). W3Schools defines the DOM as "a platform
    and language-neutral interface that allows programs and scripts to dyanmically access and update the content, structure, and style
    of a document".  
    
    * TutorialsPoint writes, "a Document object represents the HTML document that is displayed in that window. The Document object has 
    various properties that refer to other objects which allow acces to and modification of document content. The way a document content
    is accessed and modified is called the Document Object Model, or DOM.  The Objects are organized in a hierarchy.  This hierachical 
    structure applies to the organization of objects in a Web document.

2. What is an event?
    * An `event`, while in the context of this week's assignments, might be defined as any physical action (like the click of a mouse or
    the press of a key).  MDN defines it as information "sent to notify code of interesting things that have taken place".  Each event 
    is represented by an object, for example, in this week's assignments, we used the event "click", which is an object based on the 
    'Event' interface that represents the click of a mouse; however, "events can represent everything from basic user interactions to 
    automated notifications of things happening in the rendering model".

3. What is an event listener?
    * An event listener is "a procedure or function in a computer program that waits for an event to occur".  This week we used an event
    listener method called 'addEventListener', which is essentially a loop which runs every time a specific event occurs within the
    prescribed scope.  In our case, adEventListener was activated every time a 'click' was made anywhere inside the document.

    * The example below attaches an event listener (addEventListener) to any document in which it is placed, and console.log's: "an
    event was fired on (location on document where cursor was clicked)":
    
    ```document.addEventListener('click', event => {
        console.log("an event was fired on ", event.target);```
4. What is a Constructor?
    * A constructor is a part of a class which is typically used to set the stage of instances created from that
    class.  Initial values and importing of elements that will be needed to run any methods existing on the class
    will be found in the constructor.  The term "Constructor" is also sometimes used synonomously with ES2015 "classes".