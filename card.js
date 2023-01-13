export default Card;

//get suits and values for each one of cards
function Card ({suit, value}) {
    this.suit = suit
    this.value = value
}

Card.prototype.create = function () {

};

const card = new Card(); //creates instance of card
card.createCard()

//gives all different values and suits, then we can combine these together to create 52 unique cards
const suits = ["hearts", "diamonds", "spades", "clubs"]
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    