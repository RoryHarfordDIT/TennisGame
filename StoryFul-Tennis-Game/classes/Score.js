class Score {
    formattedScores = {
        0: 'love',
        1: '15',
        2: '30',
        3: '40',
        4: 'adv'
    };
    
    constructor(){
       this.score = 0;
    }

    add() {
        this.score = this.score + 1;
    }
     
    minus() {
        this.score = this.score - 1;
    }

    format() {
        return this.formattedScores[this.score];
    }

    valueOf() {
        return this.score;
    }
   
}
module.exports = Score;