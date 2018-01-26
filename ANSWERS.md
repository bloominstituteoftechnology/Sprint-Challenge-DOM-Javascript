# Question 1

## What is the DOM?

The Document Object Model, the structure in which web pages are parsed by the browser so elements can be manipulated programmatically.

## What is an event?

Any interaction by user or code with elements of the website. They propagate (bubble) up through the DOM tree to every parent until reaching document or until even.stopPropagaton() is called.

## What is an event listener?

A piece of code that reacts to hearing a specified event that happened on the element it exists on or any of its children (assuming propagation continues).