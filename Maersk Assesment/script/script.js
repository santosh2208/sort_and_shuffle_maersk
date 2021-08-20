const rearrangeCards = (newCards) => {
  let newGrid = '';
  newCards.map((newCard) => {
    newGrid = newGrid + `<div class="card card_${newCard}"><p>${newCard}</p></div>`;
  });
  document.querySelector('.grid').innerHTML = newGrid;
} 
function shuffle() {
  let totalCards = document.querySelectorAll('.card');
  let cards = [];
  while(cards.length < totalCards.length){
    let cardNo = Math.floor(Math.random() * 9 + 1);
    if(cards.indexOf(cardNo) === -1) {
      cards.push(cardNo);
    }
  }
  rearrangeCards(cards);
}
function sort() {
  let totalCards = document.querySelectorAll('.card');
  let cards = [];
  for(let i=1; i <= totalCards.length; i++) {
    cards.push(i); // Have made dynamic array. Can take static array in this case [1,...,9]
  }
  rearrangeCards(cards);
}