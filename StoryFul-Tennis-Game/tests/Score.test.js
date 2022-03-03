const Score = require('../classes/Score');


describe("Score test", () => {
    test("Verify score starts with 0 and is formatted to love", () => {
      var score = new Score();

      expect(score.valueOf()).toBe(0);
      expect(score.format()).toBe("love");
    });

    test("Verify score starts with 1 and is formatted to 15", () => {
        var score = new Score();
        
        score.add();
        expect(score.valueOf()).toBe(1);
        expect(score.format()).toBe("15");
      });

      test("Verify score starts with 2 and is formatted to 30", () => {
        var score = new Score();
        score.add();
        score.add();
        expect(score.valueOf()).toBe(2);
        expect(score.format()).toBe("30");
      });

      test("Verify score starts with 3 and is formatted to 40", () => {
        var score = new Score();
        score.add();
        score.add();
        score.add();
        expect(score.valueOf()).toBe(3);
        expect(score.format()).toBe("40");
      });

      test("Verify score starts with 4 and is formatted to adv", () => {
        var score = new Score();
        score.add();
        score.add();
        score.add();
        score.add();
        expect(score.valueOf()).toBe(4);
        expect(score.format()).toBe("adv");
      });

      test("Verify score is brought back to 3 and is formatted to 40", () => {
        var score = new Score();
        score.add();
        score.add();
        score.add();
        score.add();
        score.minus();
        expect(score.valueOf()).toBe(3);
        expect(score.format()).toBe("40");
      });
  });