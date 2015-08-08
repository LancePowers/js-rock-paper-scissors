function Game(player1,player2){
  this.player1 = player1;
  this.player2 = player2;
}
function Player(name){
  this.name = name;
  this.pick = "";
}

Player.prototype.picks = function (pick) {
  this.pick = pick;
};

Game.prototype.winner = function () {
  var pick = this.player1.pick;
  if(pick === this.player2.pick){
    return null;
  } else if (pick === 'rock') {
    return this.rock();
  } else if (pick === 'paper') {
    return this.paper();
  }else {
    return this.scissors();
  }
};

Game.prototype.rock = function () {
  if(this.player2.pick === 'paper'){
    return player2;
  } else {
    return player1;
  }
};
Game.prototype.paper = function () {
  if(this.player2.pick === 'scissors'){
    return player2;
  } else {
    return player1;
  }
};
Game.prototype.scissors = function () {
  if(this.player2.pick === 'rock'){
    return player2;
  } else {
    return player1;
  }
};


module.exports = { Game:Game, Player: Player}
