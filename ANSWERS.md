## Questions
1. What is the DOM?
  *DOM stands for Document-Object Model.  It is the underlying data structure of HTML, and takes the form of a tree.  Each HTML element comprises a node on the DOM data tree.  Elements are considered to be children of any elements which enclose them.  They are considered to be parents of any elements nested within them.
2. What is an event?
  *An event is an object that is instantiated by any kind of interaction with the page: a click, a scroll, or even a request from another web page.  It contains information about the specifics of the interaction, and it bubbles up through all of the parent DOM nodes of the element where the interaction took place.
2. What is an event listener?
  *An event listener is an object that can be attached to any DOM node by the AddEventListener method.  It runs a callback function whenever the DOM node receives an `event` object that matches its criteria.  This makes it possible for the page to be responsive to interaction.