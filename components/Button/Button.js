class ButtonsItem {
  constructor(element) {
    this.element = element;
  }

    select() {
      
        this.element.classList.add("Buttons__item-selected");
    }
        
    deselect() {
        
        this.element.classList.remove("Buttons__item-selected");
    }
}


class ButtonsItems {
  constructor(element, parent) {
    this.element = element;
    this.buttons = parent;
    this.buttonsItem = parent.getButton(this.element.dataset.buttonss);
      

    this.buttonsItem = new ButtonsItem(this.buttonsItem);
    this.element.addEventListener('click', () => {
      this.buttons.updateActive(this);
      this.select();
    });
  };
}


class Buttons {
    constructor(element) {
    this.element = element;

      return new ButtonsItems(buttons, this);

    this.activeButton = this.buttons[0];
    this.init();
    };
    
    init() {
    this.activeButton.select();
  }

    updateActive(newActive) {

    this.activeButton.deselect();

    this.activeButton = newActive;
  }

  getButton(data) {
    return this.element.querySelector(`.Buttons__items[data-buttonss="${data}"]`);
  }
    
}

let buttons = document.querySelectorAll(".Buttons");
buttons = Array.from(buttons).map(buttons => new Buttons(buttons));