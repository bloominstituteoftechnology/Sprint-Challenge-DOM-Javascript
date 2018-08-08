// function hideButton() {
//     var x = document.getElementById("Button");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }


let buttons = document.querySelectorAll('.Button');

class Button {
    constructor(element){
        this.element = element;
        this.element.addEventListener('click', () => {
          this.hideButton()})
      }

      hideButton() {
            this.element.classList.add("Button--hide");
        }
      }

buttons = buttons.forEach(button => new Button(button));
