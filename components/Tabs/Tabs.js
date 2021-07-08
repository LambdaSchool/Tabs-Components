
class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab; 
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    console.log(this.itemElement);
    this.itemElement = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => {this.select(element)});
  };

  select() {
    const links = document.querySelectorAll('.tabs-link');
    links.forEach(link => {
      link.classList.remove('tabs-link-selected');
    });
    this.element.classList.add('tabs-link-selected'); 
    this.itemElement.select();   
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.tabItem = element;

  }

  select() {
    const items = document.querySelectorAll('.tabs-item');;
    items.forEach(item => {
      item.classList.remove('tabs-item-selected');
    });
    this.tabItem.classList.add('tabs-item-selected');
  }
}

const links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));