class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector(".Dropdown__button"); 

    this.button.addEventListener("click", () => {
      this.toggleContent();
    });
  }

  toggleContent() {
    this.element.classList.toggle("Dropdown--active");
  }
}

let dropdowns = document.querySelectorAll(".Dropdown");
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));


// Button Constructor 
class Button {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector(".Button__content"); 

      this.element.addEventListener("click", () => {
      this.toggleButton();
    });
  }

  toggleButton() {
    this.button.classList.toggle("noShow");
  }
}

let buttons = document.querySelectorAll(".Button");
buttons = Array.from(buttons).map(button => new Button(button));
