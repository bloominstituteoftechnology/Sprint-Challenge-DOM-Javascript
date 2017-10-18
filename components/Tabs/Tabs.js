
class TabItem {
  constructor(element, parent) {
    this.element = element;
    this.link = parent;
    this.tabs = parent.tabs;
  }

  select() {
    this.element.classList.add("Tabs__item-selected");
  }

  deselect() {
    this.element.classList.remove("Tabs__item-selected");
  }
}

class TabLink {
  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;
    this.tabItem = this.tabs.getTab(this.element.dataset.tab);
    this.tabItem = new TabItem(this.tabItem, this);
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    this.element.classList.add("Tabs__link-selected");
    this.tabItem.select();
  }

  deselect() {
    this.element.classList.remove("Tabs__link-selected");
    this.tabItem.deselect();
  }
}

class Tabs {
  constructor(element) {
    this.element = element;
    this.links = element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.links).map((link) => {
      return new TabLink(link, this);
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

  getTab(data) {
    return this.element.querySelector(`.Tabs__item[data-tab="${data}"]`);
  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(allTabs).map(tabs => new Tabs(tabs));
