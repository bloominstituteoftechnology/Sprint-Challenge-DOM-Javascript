class Dropdown {
  constructor(element) {
    this.element = element; // ARRAY PASSES Dropdown__button AND Dropdown__content
    this.button = this.element.querySelector(".Dropdown__button"); // THIS METHOD RETURNS Dropdown__button for Dropdown__button and NULL for Dropdown__content

    this.button.addEventListener("click", () => { // ADDS THE EVENT LISTENER TO this.button or Dropdown__button ONLY
      this.toggleContent();
      this.greyOut();
    });
  }

  toggleContent() {
    this.element.classList.toggle("Dropdown--active");
  }

  greyOut() {
    this.button.classList.toggle("Dropdown--greyed");
  }
}

let dropdowns = document.querySelectorAll(".Dropdown");
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));