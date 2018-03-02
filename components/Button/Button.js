//Initiate the Constructor
class Button {
  constructor(hidButton) {
    this.hidButton = hidButton;
  }

//Function used to create the event
const hidButton = document.getElementsByClassName('Button');

hidButton.onClick = function() {

        if(this.hidButton === hidden) {
            document.getElementByClassName('Button').style.display = 'none';
        } else {
            document.getElementByClassName('Button').style.display = 'visible';
        }
    }
