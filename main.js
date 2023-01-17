import Game from './game.js';
import Card from './card.js';
import Player from './player.js';

let warGame; 

const startGameButton = document.querySelector('.start-game');
startGameButton.addEventListener('click', function() { startGame(); }, false);

const playRoundButton = document.querySelector('.play-round');
playRoundButton.addEventListener('click', function() {playRound();}, false);

const computerDeck = document.querySelector('.computer-count');
const playerDeck = document.querySelector('.player-count');





function startGame () {
    const name1 = prompt('Enter your name')
    const name2 = prompt('Enter your name')
    const player1 = new Player({name: name1, hand: []});
    const player2 = new Player({name: name2, hand: []});

    
    warGame = new Game({player1, player2});
    warGame.deal();
    computerDeck.innerHTML = warGame.player2.hand.length;
    playerDeck.innerHTML = warGame.player1.hand.length;
    

    
    
 }


 function playRound () {
    
    alert (warGame.play());
    const winner = warGame.winsGame();
    if (winner !== null) {
        alert (winner);
    }
    console.log(warGame);
    computerDeck.innerHTML = warGame.player2.hand.length;
    playerDeck.innerHTML = warGame.player1.hand.length;

 }



// function Game({ player1, player2 } = {}) {
//     this.player1 = player1;
//     this.player2 = player2;
    
//   }


  





























