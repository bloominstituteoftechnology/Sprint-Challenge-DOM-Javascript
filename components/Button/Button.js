class Button {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector("Button");
    
        this.button.addEventListener("click", () => {
          this.buttonDisp(button);
        });
      }
      buttonDisp(button) {
        var div = document.getElementsByClassName("Button");
        div.style.display = 'none';
    }
}
    