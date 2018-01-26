## Questions
1. What is the DOM?
 - Document Object Model // where the document is the whole webpage and any elements in it are treated as objects. Treats the page like a tree.
2. What is an event?
 - Events are records of users interacting with your code. Could be clicks/scrolls/touch/drag whatever, they are only created upon an interaction occuring and only utilized if they are being listened for. They still occur upon interaction but nothing is done with them unless they have a listener. Events also exhibit bubble behavior meaning they traverse our pages elements/nodes upwards through the tree in the shortest path to the root document.
2. What is an event listener?
 - The event Listener is code that listens for when events occur in order to do something based on that event. In our example we had an event listener listening for the event of a click on one of our tabs.