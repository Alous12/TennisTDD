
import TennisScorer from "./tennisScore";

describe("Tennis Score", () => {
  it("deberia mostrar el marcador inicial Love - Love", () => {
    const tennisScorer = new TennisScorer();
    expect(tennisScorer.showScore()).toEqual("Love - Love");
  });
  it("Deria mostrar el marcador 15 - Love cuando el jugador 1 anota un punto", () => {
    const tennisScorer = new TennisScorer();
    tennisScorer.player1Scores();
    expect(tennisScorer.showScore()).toEqual("15 - Love");
  });

  it("Deberia mostrar el marcador 30 - Love cuando el jugador 1 anota dos puntos", () => {
    const tennisScorer = new TennisScorer();
    tennisScorer.player1Scores();
    tennisScorer.player1Scores();
    expect(tennisScorer.showScore()).toEqual("30 - Love");
  });

  it("Deberia mostrar el marcador 40 - Love cuando el jugador 1 anota tres puntos", () => {
    const tennisScorer = new TennisScorer();
    tennisScorer.player1Scores();
    tennisScorer.player1Scores();
    tennisScorer.player1Scores();
    expect(tennisScorer.showScore()).toEqual("40 - Love");
  });

  it("Deberia mostrar el marcador Love - 15 cuando el jugador 2 anota un punto", () => {
    const tennisScorer = new TennisScorer();
    tennisScorer.player2Scores();
    expect(tennisScorer.showScore()).toEqual("Love - 15");
  });

});