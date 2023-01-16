import Player from "./player.js";
import Deck from "./deck.js";
import {deck} from "./deck.js";
import {values} from "./card.js";

export default Game;

// const name1 = prompt('Enter your name')
// const name2 = prompt('Enter your name')
const player1 = new Player({ name: "name1", hand: [] })
const player2 = new Player({ name: "name2", hand: [] })

//Deal

Deck.prototype.deal = function () {

    //remainder loops through shuffle array and gives 1 or 0
  for (let i = 0; i < deck.cards.length; i++) {
        let card = i % 2;
    if (i % 2 === 0) {
      player1.hand.push(deck.cards[i]);
      //will push onto player1 hand
    } else {
      player2.hand.push(deck.cards[i]);
    }
    //will push onto player2 hand
  }
}
  deck.deal();
  console.log(player1.hand);
  console.log(player2.hand);


// Eric example of deal
// const testing = [1,2,3,4,5,6,7];

// for (let i = 0; i < testing.length; i++) {
//   let test = i % 2;
//   if (i === 0){
//   	//give to player 1
//   } else //give to player 2
//   console.log(test)

// }

// console.log(testing)

function Game({ player1, player2 } = {}) {
  this.player1 = player1;
  this.player2 = player2;
  
}

// Game.prototype;

Game.prototype.play = function () {
    const player1Card = this.player1.hand[0]; //gives value of player 1 card at index 0
    const player2Card = this.player2.hand[0]; //gives value of player 2 card at index 0
    this.compare(player1Card, player2Card);
}

Game.prototype.compare = function (player1Card, player2Card) {
    const player1CardValue = player1Card.value;
    const player2CardValue = player2Card.value;
    const player1Index = values.indexOf(player1CardValue);//use indexOf to compare player 1 card value to player 2 card value
    const player2Index = values.indexOf(player2CardValue);
    if (player1Index > player2Index) {
            // player 1 wins, add both player 1 card and player 2 card to player 1 hand
            //takes winner cards and places on their hand
    } else if (player2Index > player1Index) {
        //player 2 wins, takes winner cards and places on their hand
    } else {//WAR!!
    }
}

function addCardsToHand (hand, ...cards) { //use spread operator since we don't know how many cards winner will get added to hand(whether it is just two cards or will be more if it is WAR)

}


// const game = new Game();
// game.player1.hand

// function Student({name, project, progress} = {}) {
//     this.name = name;
//     this.project = project;
//     this.progress = progress;
//     this.classmates = [];
//   }
//   function Classroom () {
//       this.students = [];
//         this.teacher = "Mady";
//   }

//   const student1 = new Student({name: "‘Brande", progress: "Great"});
//   const student2 = new Student({name: "Jake"});

//   const classroom = new Classroom;

//   classroom.students.push(student1, student2);
//   classroom.students[0].project = "War Game";

// Game.prototype.play = function() {
//     this.deal();
// }

// const game = new Game();
// game.play();
