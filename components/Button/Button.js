class Button {
  constructor(button) { 
    this.button = button;
    this.button.querySelectorAll(".Button");
    this.button.addEventListener("click", () => {
      this.hideButtons();
      console.log('for');
    });
  
  }
  hideButtons() {
    const buttons = document.querySelectorAll(".Button");
    buttons.forEach(function(button) {
      button.style.display = "none";
      console.log('hide');
    });
    
    
  }

}

let buttons = document.querySelectorAll(".Button");
buttons = Array.from(buttons).map(button => new Button(button));

