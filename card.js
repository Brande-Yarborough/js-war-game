export default Card;

//gives all different values and suits, then we can combine these together to create 52 unique cards
export const suits = ["♠", "♣", "♥", "♦"];
export const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

//get suits and values for each one of cards
function Card ({suit, value}) {
    this.suit = suit;
    this.value = value;
}

Card.prototype.createCard = function () {

};

const card = new Card({
    suit: 'some value',
    value: 'some value',
}); //creates instance of card
card.createCard();








    