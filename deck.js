import { suits, values } from "./card.js";
import Card  from "./card.js";


export default Deck;

function Deck () {
    this.cards = []; //get 52 cards inside empty array
    
}
Deck.prototype.createDeck = function () {
    // creates the deck

    for (let i = 0; i < suits.length; i++){ //iterates over all suits
        const suit = suits[i];
        for (let i = 0; i < values.length; i++) { //iterates over all values
            const value = values[i]
            const card = new Card({suit, value})
            this.cards.push(card)
            // console.log(card)
        }
    }
    // console.log(suits, values)
};


Deck.prototype.shuffle = function (cards) {

    for (let i = 0; i < cards.length; i++ ) {
        let random = Math.floor(Math.random() * 51);
        // console.log({i, random})


        // console.log(cards[i])
        //The card that's located at the RANDOM index is now equal to our current card
        cards[i] = cards[random]; 
        // The card located at our current index is moved to our RANDOM index
        cards[random] = cards[i];

        //If the index is currently at 0 
        //If the random index is currently at 17
        //Move the card at index 0 to index 17 and move the card at index 17 index 0


    }

}

export const deck = new Deck(); //creates instance of deck
deck.createDeck();
// // console.log(deck.cards);
deck.shuffle(deck.cards);
// console.log(deck.cards)







// Deck.prototype.createDeck = function (suits, values) {
//     // creates the deck
//     // ['D', 'C', 'S', 'H'] //need two for loops
//     // [2, 3, 4 ...]
//     const suits = ["hearts", "diamonds", "spades", "clubs"];
//     const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


//     // this.cards.push(new Card({suit, value}))
//     console.log(suits, values)


    
// };

// const deck = new Deck(); //creates instance of deck
// deck.createDeck(suits, values);

