import Player from "./player.js";
import Deck from "./deck.js";
import { deck } from "./deck.js";
import { values } from "./card.js";

let warIterations = 0; //first iteration of playWar

function Game({ player1, player2 }) {
  this.player1 = player1;
  this.player2 = player2;
}

//Deal

Game.prototype.deal = function () {
  //remainder loops through shuffle array and gives 1 or 0
  for (let i = 0; i < deck.cards.length; i++) {
    let card = i % 2;
    if (i % 2 === 0) {
      this.player1.hand.push(deck.cards[i]);
      //will push onto player1 hand
    } else {
      this.player2.hand.push(deck.cards[i]);
    }
    //will push onto player2 hand
  }
};

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

// Game.prototype;

Game.prototype.play = function () {
  const player1Card = this.player1.hand[0]; //gives value of player 1 card at index 0
  const player2Card = this.player2.hand[0]; //gives value of player 2 card at index 0
  warIterations = 0;
  return this.compare(player1Card, player2Card);
};

Game.prototype.compare = function (player1Card, player2Card) {
  const player1CardValue = player1Card.value;
  const player2CardValue = player2Card.value;
  const player1Index = values.indexOf(player1CardValue); //use indexOf to compare player 1 card value to player 2 card value
  const player2Index = values.indexOf(player2CardValue);
  console.log({ player1Index, player2Index });

  document.getElementById("player-card").innerHTML = [
    this.player1.hand[0].value,
    this.player1.hand[0].suit,
  ];

  document.getElementById("computer-card").innerHTML = [
    this.player2.hand[0].value,
    this.player2.hand[0].suit,
  ];

  if (player1Index > player2Index) {
    // player 1 wins, add both player 1 card and player 2 card to player 1 hand
    //takes winner cards and places on their hand
    addCardsToHand(this.player1.hand, player1Card, player2Card);
    removeCardsFromHand(this.player2.hand, player2Card);
    return `${this.player1.name} wins round!`;
  } else if (player2Index > player1Index) {
    //player 2 wins, takes winner cards and places on their hand
    addCardsToHand(this.player2.hand, player2Card, player1Card);
    removeCardsFromHand(this.player1.hand, player1Card);
    return `${this.player2.name} wins round!`;
  } else {
    return playWar(this.player1, this.player2);
  }
};
function playWar(player1, player2) {
  console.log(player1);
  console.log(player2);
  if (
    player1.hand.length < warIterations * 4 + 5 ||
    player2.hand.length < warIterations * 4 + 5
  ) {
    console.log("not enough cards to play"); //if hit war and players dont have enough cards
    //need to write prompt for when player does not have enough
    alert("Not enough war cards.  Game Over!!");
    return;
  }
  const warPlayer1Cards = player1.hand.slice(
    warIterations * 4 + 1,
    warIterations * 4 + 5
  );
  const warPlayer2Cards = player2.hand.slice(
    warIterations * 4 + 1,
    warIterations * 4 + 5
  );
  console.log(warPlayer1Cards);
  console.log(warPlayer2Cards);
  warIterations += 1;
  const winner = compareWar(warPlayer1Cards, warPlayer2Cards, player1, player2);
  //creates new array for playWar to compare, so index starts over at 0
  console.log(warIterations);
  return winner;
}

function compareWar(warPlayer1Cards, warPlayer2Cards, player1, player2) {
  const compareWarPlayer1Card = warPlayer1Cards[3];
  const compareWarPlayer2Card = warPlayer2Cards[3];
  const player1CardValue = compareWarPlayer1Card.value;
  const player2CardValue = compareWarPlayer2Card.value;
  const player1Index = values.indexOf(player1CardValue); //use indexOf to compare player 1 card value to player 2 card value
  const player2Index = values.indexOf(player2CardValue);
  const p1Cards = player1.hand.slice(0, warIterations * 4 + 5);
  const p2Cards = player2.hand.slice(0, warIterations * 4 + 5);

  console.log("compare war is running");

  if (player1Index > player2Index) {
    // player 1 wins, add both player 1 card and player 2 card to player 1 hand
    //takes winner cards and places on their hand
    addCardsToHand(player1.hand, ...p1Cards.concat(p2Cards));
    removeCardsFromHand(player2.hand, ...p2Cards);
    return `${player1.name} wins round!`;
  } else if (player2Index > player1Index) {
    //player 2 wins, takes winner cards and places on their hand
    addCardsToHand(player2.hand, ...p2Cards.concat(p1Cards));
    removeCardsFromHand(player1.hand, ...p1Cards);
    return `${player2.name} wins round!`;
  } else {
    return playWar(player1, player2);
  }
}

function addCardsToHand(hand, ...cards) {
  //use spread operator since we don't know how many cards winner will get added to hand(whether it is just two cards or will be more if it is WAR)
  hand.push(...cards);
  for (let i = 0; i < cards.length; i++) {
    if (i % 2) {
      hand.shift();
    }
  }
}

function removeCardsFromHand(hand, ...cards) {
  for (let i = 0; i < cards.length; i++) {
    hand.shift();
  }
}

Game.prototype.winsGame = function () {
  if (this.player2.hand.length === 0) {
    return `${this.player1.name} wins game!`;
  } else if (this.player1.hand.length === 0) {
    return `${this.player2.name} wins game!`;
  }
  return null;
};

export default Game;

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
