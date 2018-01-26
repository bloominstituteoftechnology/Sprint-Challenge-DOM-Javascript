
class TabItem {
  constructor(element) {
    this.element = element;
  }


let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));
