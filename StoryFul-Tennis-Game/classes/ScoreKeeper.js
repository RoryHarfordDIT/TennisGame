const Score = require("./Score");

class ScoreKeeper {
    constructor(){
        this.score1 = new Score();
        this.score2 = new Score();
     }

    /** 
     *  @summary addScore - addScore adds to a players score
     *  @description this function checks if the other score is 'adv' them it minuses the other player back to 40 rather then adding the score the player who scored.
     *  otherwise this function calls the relative function to add the score and check if the game has been won or is currently 'Duece'
     *  @author Rory Harford
    */
     addScore(scoreId) {
        if(scoreId === 1 && this.score2.score === 4) this.score2.minus();
        else if(scoreId === 2 && this.score1.score === 4) this.score1.minus();
        else if(scoreId === 1) this.score1.add();
        else this.score2.add();

        if(this.isGameOver()) console.log('Player '+scoreId+' has won');
        else this.printScore();
    }
    /** 
     *  @summary printScore - checks if game is Duece if not it prints the current score
     *  @author Rory Harford
    */
    printScore() {
        if (this.isGameDuece()) console.log('DUECE');
        else console.log('Player 1 '+ this.score1.format() + ' - '+ this.score2.format() +' Player 2');
    };

    /** 
     *  @summary isGameDuece - this function checks that a game is Deuce (a tennis game is duece when both players are on 40)
     *  @author Rory Harford
    */
    isGameDuece() {
        if(this.score1.score  === 3 && this.score2.score === 3) return true;
    }


    /** 
     *  @summary isGameOver - this function checks if either player has won 
     *  @author Rory Harford
    */
    isGameOver() {
        if(this.score1 > 3 && this.score1 > this.score2 + 1) {
            return true;
        }

        if(this.score2 > 3 && this.score2 > this.score1 + 1) {
            return true;
        }

    }
}
module.exports = ScoreKeeper;