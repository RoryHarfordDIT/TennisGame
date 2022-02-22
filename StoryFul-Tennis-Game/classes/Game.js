const ScoreKeeper = require("./ScoreKeeper");

class Game {
    constructor(){
       this.scoreKeeper = new ScoreKeeper();
    }

    addScore(scoreId) {
        this.scoreKeeper.addScore(scoreId);
    }
    
  
}

module.exports = Game;