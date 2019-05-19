class NewParty{
    constructor(newElement){
        this.newElement = newElement;

        
    }
}


class DropDown{
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
      
let dropdowns = document.querySelectorAll('#shop-nav').forEach( dropdown => new DropDown(dropdown));

class TabLink{
    contructor(tabElement){
        
        this.tabElement = tabElement;

        this.tabData = this.tabElement.dataset.tab;

        if(this.tabData === 'all'){
            this.cards = document.querySelectorAll('.selection-item');
            console.log('selected all');
        } else{
            this.cards = document.querySelector(`.selection-item[data-tab='${this.tabData}']`);
        }

        this.cards = Array.from(this.cards).map(card => new TabCard(card));

        this.tabElement.addEventListener('click', () => {
            this.selectTab();
            console.log('tab selected');
        });
    }

    selectTab(){
        const tabs = document.querySelectorAll('.tab');

        tabs.forEach((tab) => {
            tab.classList.remove('active-tab');
            console.log('class removed');
        }); 

        const cards = document.querySelector('.selection-item');

        cards.forEach(card => {
            card.style.display = 'none';
            console.log('changed to no display');
          });

          this.tabElement.classList.add('active-tab');

          this.cards.forEach(card => card.selectCard());
    }
}

class TabCard{
    contructor(cardElement){
        
        this.cardElement = cardElement;

    }

    selectCard(){

    this.cardElement.style.display = "flex";

    }

}

let tabs = document.querySelectorAll('.tab').forEach((tab) => new TabLink(tab));

