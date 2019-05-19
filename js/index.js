
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
      
let shopdropdowns = document.querySelectorAll('#shop-nav').forEach( shopdropdown => new ShopDropDown(shopdropdown));

class NewParty {
    constructor(element) {
      
      this.element = element;
      
      this.button = document.querySelector('.new-party-btn');
      
      this.content = document.querySelector('.party-container');
      
      this.button.addEventListener('click', () => {
        this.toggleContent();
      })
    }
  
    toggleContent() {
    
        this.content.classList.toggle('#new-party');
        this.content.classList.toggle('party-hidden');
    }
  }
  
  let newpartys = document.querySelectorAll('#new-party').forEach( newparty => new NewParty(newparty));

class TabLink {
    constructor(tabElement){
      
      this.tabElement = tabElement;
       
      this.tabData = this.tabElement.dataset.tab;
      
      if(this.tabData === 'all'){
        
        this.cards = document.querySelectorAll('.selection-item');
      } else {
       
        this.cards = document.querySelectorAll(`.selection-item[data-tab='${this.tabData}']`);
      }
      
      this.cards = Array.from(this.cards).map(card => new TabCard(card));
  
      this.tabElement.addEventListener('click', () => {
        this.selectTab();
        console.log('Tab Selected');
      });
  
    }
  
    selectTab(){
  
      const tabs = document.querySelectorAll('.tab')

      tabs.forEach((tab) => {
        tab.classList.remove('active-tab');
        console.log('class removed')
      })
 
      const cards = document.querySelectorAll('.selection-item');
  
      cards.forEach(card => {
        card.style.display = 'none';
        console.log('changed to no display');
      })
      
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