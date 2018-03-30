class Button {
  constructor(element){
    this.element = element;
    this.element.addEventListener("click", ()=>{
      this.removeButton()
    })
  }
  removeButton(){
    this.element.remove(this.element);
  }
}


let button = document.querySelectorAll(".Button");
button = Array.from(button).map(button => new Button(button))
