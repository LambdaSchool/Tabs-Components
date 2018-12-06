
class TabLink {
  constructor(element) {

    // console.log("element: ", element);
    // Assign this.element to the passed in DOM element
    // this.element;

    this.element = element;


    // Get the custom data attribute on the Link
    // this.data;

    this.data = this.element.dataset.tab;


    // console.log("data: ", this.data);
    // Using the custom data attribute get the associated Item element
    // this.itemElement;

    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);


    // console.log("itemElement: ", this.itemElement);
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;

    this.tabItem = new TabItem(this.itemElement);
    // console.log(this.tabItem)


    // Add a click event listener on this instance, calling the select method on click

    this.element.addEventListener("click", () => {this.select()});

  }//TabLink constructor


  select() {

    // Get all of the elements with the tabs-link class
    // const links;

    const links = document.querySelectorAll(".tabs-link");
    console.log(links);


    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();

    links.forEach(link => link.classList.remove("tabs-link-selected"));


    // Add a class named "tabs-link-selected" to this link
    // this.element;

    this.element.classList.add("tabs-link-selected");


    // Call the select method on the item associated with this link
    this.element.select();

  }//TabLink select()
}//TabLink




class TabItem {
  constructor(element) {

    this.element = element;
    // console.log("TabItem element: ", this.element);
    // Assign this.element to the passed in element
    // this.element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;

    const items = document.querySelectorAll(".tabs-item");


    // Remove the class "tabs-item-selected" from each element

    items.forEach(item => item.classList.remove("tabs-item-selected"));


    // Add a class named "tabs-item-selected" to this element
    //this.element;

    this.element.classList.add("tabs-item-selected");

  }//TabItem select()
}//TabItem

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

let links = document.querySelectorAll(".tabs-link")
            .forEach(link => new TabLink(link));