class Disappear {
  constuctor (button) {
    button.addEventListener('click', (event) =>{
      console.log('hello I have been clicked');
      // button.classList.toggle('.Button__disappear');
    });
  }
}

const pressButton = document.querySelector('Button');

const test = new Disappear (pressButton);
