const Score = require("./Score");

class ScoreKeeper {
   

    constructor(){
        this.score1 = new Score();
        this.score2 = new Score();
     }

     addScore(scoreId) {
        if(scoreId === 1) this.score1.add();
        else this.score2.add();
        if(this.isGameOver());
        else this.printScore();
        
        
    }

    printScore() {
        console.log('Player 1 '+ this.score1.format());
    };

    isGameOver() {
        if(this.score1 > 3 && this.score1 > this.score2 + 2) {
            return true;
        }

        if(this.score2  > 3 && this.score2  > this.score1 + 2) {
            return true;
        }
    }
}
module.exports = ScoreKeeper;