const ScoreKeeper = require('../classes/ScoreKeeper')
it('expect Player 1 to be  15 to love up', () => {
    const logSpy = jest.spyOn(console, 'log');
    var scoreKeeper = new ScoreKeeper();
    scoreKeeper.addScore(1);
    expect(logSpy).toHaveBeenCalledWith('Player 1 15 - love Player 2');
});

it('expect Player 1 to be  30 to love up', () => {
    const logSpy = jest.spyOn(console, 'log');
    var scoreKeeper = new ScoreKeeper();
    scoreKeeper.addScore(1);
    jest.clearAllMocks();
    scoreKeeper.addScore(1);
    expect(logSpy).toHaveBeenCalledWith('Player 1 30 - love Player 2');
});

it('expect Player 1 to be  40 to love up', () => {
    jest.clearAllMocks();
    const logSpy = jest.spyOn(console, 'log');
    var scoreKeeper = new ScoreKeeper();
    scoreKeeper.addScore(1);
    scoreKeeper.addScore(1);
    jest.clearAllMocks();
    scoreKeeper.addScore(1);
    expect(logSpy).toHaveBeenCalledWith('Player 1 40 - love Player 2');
});

it('expect Player 1 to have won the game', () => {
    const logSpy = jest.spyOn(console, 'log');
    var scoreKeeper = new ScoreKeeper();
    scoreKeeper.addScore(1);
    scoreKeeper.addScore(1);
    scoreKeeper.addScore(1);
    jest.clearAllMocks();
    scoreKeeper.addScore(1);
    expect(logSpy).toHaveBeenCalledWith('Player 1 has won');
});

it('expect Player 2 to be  15 to love up', () => {
    const logSpy = jest.spyOn(console, 'log');
    var scoreKeeper = new ScoreKeeper();
    jest.clearAllMocks();
    scoreKeeper.addScore(2);
    expect(logSpy).toHaveBeenCalledWith('Player 1 love - 15 Player 2');
});

it('expect Player 2 to be  30 to love up', () => {
    
    const logSpy = jest.spyOn(console, 'log');
    var scoreKeeper = new ScoreKeeper();
    scoreKeeper.addScore(2);
    jest.clearAllMocks();
    scoreKeeper.addScore(2);
    expect(logSpy).toHaveBeenCalledWith('Player 1 love - 30 Player 2');
});

it('expect Player 2 to be  40 to love up', () => {
    const logSpy = jest.spyOn(console, 'log');
    var scoreKeeper = new ScoreKeeper();
    scoreKeeper.addScore(2);
    scoreKeeper.addScore(2);
    jest.clearAllMocks();
    scoreKeeper.addScore(2);
    expect(logSpy).toHaveBeenCalledWith('Player 1 love - 40 Player 2');
});

it('expect Player 2 to have won the game', () => {
    const logSpy = jest.spyOn(console, 'log');
    var scoreKeeper = new ScoreKeeper();
    scoreKeeper.addScore(2);
    scoreKeeper.addScore(2);
    scoreKeeper.addScore(2);
    jest.clearAllMocks();
    scoreKeeper.addScore(2);
    expect(logSpy).toHaveBeenCalledWith('Player 2 has won');
});

it('expect Player 1 to have advantage', () => {
  
    const logSpy = jest.spyOn(console, 'log');
    var scoreKeeper = new ScoreKeeper();
    scoreKeeper.addScore(2);
    scoreKeeper.addScore(2);
    scoreKeeper.addScore(2);
    scoreKeeper.addScore(1);
    scoreKeeper.addScore(1);
    scoreKeeper.addScore(1);
    jest.clearAllMocks();
    scoreKeeper.addScore(1);
    expect(logSpy).toHaveBeenCalledWith('Player 1 adv - 40 Player 2');
});

it('expect Player 2 to have advantage', () => {
    const logSpy = jest.spyOn(console, 'log');
    var scoreKeeper = new ScoreKeeper();
    scoreKeeper.addScore(2);
    scoreKeeper.addScore(2);
    scoreKeeper.addScore(2);
    scoreKeeper.addScore(1);
    scoreKeeper.addScore(1);
    scoreKeeper.addScore(1);
    jest.clearAllMocks();
    scoreKeeper.addScore(1);
    expect(logSpy).toHaveBeenCalledWith('Player 1 40 - adv Player 2');
});

it('expect the game scoreline to be duece', () => {
    const logSpy = jest.spyOn(console, 'log');
    var scoreKeeper = new ScoreKeeper();
    scoreKeeper.addScore(2);
    scoreKeeper.addScore(2);
    scoreKeeper.addScore(2);
    scoreKeeper.addScore(1);
    scoreKeeper.addScore(1);
    jest.clearAllMocks();
    scoreKeeper.addScore(1);
    expect(logSpy).toHaveBeenCalledWith('DUECE');
});






