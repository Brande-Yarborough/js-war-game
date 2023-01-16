import Game from './game.js';
import Card from './card.js';
import Player from './player.js';

let warGame; 
const player1 = new Player({name: 'name1', hand: []});
const player2 = new Player({name: 'name2', hand: []});

const startGameButton = document.querySelector('.start-game');
startGameButton.addEventListener('click', function() { startGame(); }, false);

const playRoundButton = document.querySelector('.play-round');
playRoundButton.addEventListener('click', function() {playRound();}, false);



function startGame () {

    warGame = new Game({player1, player2});
    warGame.deal();
    

    
    
 }


 function playRound () {
    
    alert (warGame.play());
    const winner = warGame.winsGame();
    if (winner !== null) {
        alert (winner);
    }
    console.log(warGame);
 }



// function Game({ player1, player2 } = {}) {
//     this.player1 = player1;
//     this.player2 = player2;
    
//   }


  





























