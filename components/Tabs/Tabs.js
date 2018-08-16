
class TabLink {
  constructor(tabsLinks) {
    this.item = tabsLinks;
    
    // Get the custom data attribute on the Link
    // this.data;
    this.data = this.item.dataset.tab;       
    
    // Using the custom data attribute get the associated Item element
    //this.itemElement;
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.item.addEventListener('click', () => { this.select() });
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');
   
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach((e) => { e.classList.remove('tabs-link-selected');

     });

    // Add a class named "tabs-link-selected" to this link
    this.item.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();

  }
}

class TabItem {
  constructor(tabsItem) {
    this.element = tabsItem;
  }

  select() {
    // Select all items elements from the DOM
    let items = document.querySelectorAll('.tabs-item');
    console.log(items);

    // Remove the class "tabs-item-selected" from each element
    // Add a class named "tabs-item-selected" to this element 
  }
}


// START HERE: create a reference to the ".tabs" classes
// let links = document.querySelectorAll();
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(tabsLinks => new TabLink(tabsLinks));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
