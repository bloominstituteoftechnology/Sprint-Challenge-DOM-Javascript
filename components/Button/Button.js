//let hideButton = document.querySelector('.Button__1');
//let buttons = document.querySelectorAll('.Section__header');

class HideButton{
    constructor(button){
      this.button = button;
      this.button.addEventListener('click', () => {

        this.buttonHide();
      });
    }
    buttonHide(){
      console.log('working')
      console.log(this.button)
      this.button.classList.toggle('Button--displayNone');
    //  hideButton.classList.toggle('Container--yes');
    }
}
let button = document.querySelectorAll(".Button");
button = Array.from(button).map(button => new HideButton(button));

//header = new HideButton(header);