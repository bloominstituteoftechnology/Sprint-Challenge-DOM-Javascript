class ButtonItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('Button__item-selected');
  }

  deselect() {
    this.element.classList.remove('Button__item-selected');
  }
}

class Button_Link {
  constructor(element, parent) {
    this.element = element; 
    this.button = parent; 
    this.buttonItem = parent.getButton(this.element); // assign this to the associated tab using the parent's "getTab" method by passing it the correct data

    
    this.buttonItem = new ButtonItem(this.tabsItem);
    this.element.addEventListener('click', () => {
      this.button.updateActive(this);
      this.select();
    });
  }

  select() {
    this.element.classList.add('Button__link-selected');
    this.buttonItem.select();
  }

  deselect() {
    this.element.classList.remove('Button__link-selected');
    this.buttonItem.deselect();
  }
}

class Button {
  constructor(element) {
    this.element = element; 
    this.links = element.querySelectorAll('.Button__link');
    this.links = Array.from(this.links).map(link => {
      return new ButtonLink(link, this);
    });
    this.activeLink = this.links[0];
    this.init();
  }

  init() {
    this.activeLink.select();
  }

  updateActive(newActive) {
    
    this.activeLink.deselect();
    
    this.activeLink = newActive;
  }
 

}

let button = document.querySelectorAll('.Button');
tabs = Array.from(button).map(Button => new Button(button));

