import Player from "./player.js";
import Deck from "./deck.js";
import {deck} from "./deck.js";

export default Game;

// const name1 = prompt('Enter your name')
// const name2 = prompt('Enter your name')
const player1 = new Player({ name: "name1", hand: [] })
const player2 = new Player({ name: "name2", hand: [] })
// const deck = new Deck();
// deck.createDeck();
// deck.shuffle(deck.cards);
// console.log("DECK", deck);

//Deal

Deck.prototype.deal = function () {

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
//   if (test === 0){
//   	//give to player 1
//   } else //giver to player 2
//   console.log(test)

// }

// console.log(testing)

function Game({ player1, player2 } = {}) {
  this.player1 = player1;
  this.player2 = player2;
  
}

// Game.prototype;

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
