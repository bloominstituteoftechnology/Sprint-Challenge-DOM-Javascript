//Initiate the Constructor
class Button {
  constructor(element) {
    this.element = element;
    //Calling the addEventListener function
    this.element.addEventListener('click', () => {
    this.element.classList.add('Button--hidden');
      //Setting the toggle to true
    // this.element.onClick === 'hidden';
    })
  }
//Setting up my function
// this.element = () => {
//          if document.getElementByClassName("Button").onclick () => {
//               document.getElementByClassName("Button").style.visibility === "hidden";} else {
//               document.getElementByClassName("Button").style.visibility === "visible";
//             }
//         }
//     }

let buttons = document.getElementByClassName('.Button');
buttons = Array.from(buttons).map(button => {
  return new Button(button);
});
