let buttons = document.querySelectorAll('.Button'); //r returns NodeList of 3 elements containing Button class


//################## ES5 Syntax #################
// buttons = Array.from(buttons).map((button) => {
    
//     button.addEventListener('click', () => {
        
//         button.classList.toggle('Button--hide');
       
//     })
//     console.log(buttons)
// })

//################## USING FOR LOOP #################
//     for (let i = 0; i < buttons.length; i++) {
    
//     buttons[i].addEventListener('click', (event) => {
         
//         event.target.classList.toggle('Button--hide');
    
//     })
    
// }
//################## ES6 Syntax #################
class Button {
    constructor(element){
      this.element = element;
      this.element.addEventListener('click', () => {
        this.element.classList.toggle('Button--hide');
      });
    }
  }
  
 buttons = Array.from(buttons).map(item => {
    new Button(item);
  });


