export default Player;

function Player ({name, hand}) {
this.name = name;
this.hand = hand;

}

let player1 = new Player ({
    name: "Player 1",
});
let player2 = new Player ({
    name: "Player 2",
});
console.log(player1)
console.log(player2)

// const Player = new Player({
//    name: 'some value',
//    hand: 'some value',
// });
