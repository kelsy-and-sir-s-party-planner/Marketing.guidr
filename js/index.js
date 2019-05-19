class NewParty{
    constructor(newElement){
        this.newElement = newElement;


    }
}


class ShopDropDown{
    constructor(element){

        this.element = element;

        this.button = this.element.querySelector('.shop-btn');

        this.content = this.element.querySelector(".shop-content");

        this.button.addEventListener('click', () => {
            this.toggleContent();
        });

    }

    toggleContent() {
        this.content.classList.toggle('shop-hidden');
      }

}
      
let dropdowns = document.querySelectorAll('#shop-nav').forEach( dropdown => new ShopDropDown(dropdown));

class TabLink {
    constructor(tabElement){
      // assign this.tabElement to the tabElement DOM reference
      // this.tabElement;
      this.tabElement = tabElement;
      
      // Get the `data-tab` value from this.tabElement and store it here
      // this.tabData = ; 
      this.tabData = this.tabElement.dataset.tab;
      
      // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
      
      // Check to see if this.tabData is equal to 'all'
      if(this.tabData === 'all'){
        // If `all` is true, select all cards regardless of their data attribute values
        // this.cards = ;
        this.cards = document.querySelectorAll('.selection-item');
      } else {
        // else if `all` is false, only select the cards with matching this.tabData values
        // this.cards = ;
        this.cards = document.querySelectorAll(`.selection-item[data-tab='${this.tabData}']`);
      }
      
       // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
      // this.cards = Array.from(this.cards).map();
      this.cards = Array.from(this.cards).map(card => new TabCard(card));
  
      // Add a click event that invokes this.selectTab
      // this.tabElement.addEventListener();
  
      this.tabElement.addEventListener('click', () => {
        this.selectTab();
        console.log('Tab Selected');
      });
  
    }
  
    selectTab(){
  
      // Select all elements with the .tab class on them
      // const tabs = document.querySelectorAll();
      const tabs = document.querySelectorAll('.tab')
      
      // Iterate through the NodeList removing the .active-tab class from each element
      // tabs.forEach()
      tabs.forEach((tab) => {
        tab.classList.remove('active-tab');
        console.log('class removed')
      })
  
      // Select all of the elements with the .card class on them
      // const cards = ;
      const cards = document.querySelectorAll('.selection-item');
  
      // Iterate through the NodeList setting the display style each one to 'none'
      // cards.forEach()
  
      cards.forEach(card => {
        card.style.display = 'none';
        console.log('changed to no display');
      })
      
      // Add a class of ".active-tab" to this.tabElement
      // this.tabElement;
      this.tabElement.classList.add('active-tab');
    
      this.cards.forEach(card => card.selectCard());
    }
  }
  
  class TabCard {
    constructor(cardElement){

      this.cardElement = cardElement;
    }
    selectCard(){

      this.cardElement.style.display = "flex";
      console.log('changed to flex');
    }
  
  }

  let tabs = document.querySelectorAll('.tab').forEach((tab) => new TabLink(tab));