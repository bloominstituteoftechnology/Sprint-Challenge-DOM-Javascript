let button = document.querySelectorAll('.Button');
 

class Button{
    constructor(element){
       
        this.element = element;
        this.element.addEventListener('click', () => {
          this.disappear()});
       
    }
     disappear(){
         
        this.element.classList.toggle('Button--hide')
    }
   
}
// newbotton = new Button(button);

copyButton =  Array.from(button).map((item)=>  new Button(item));