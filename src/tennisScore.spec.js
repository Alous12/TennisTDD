
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

  it("Deberia mostrar ek marcador 30 - Love cuando el jugador 1 anota dos puntos", () => {
    const tennisScorer = new TennisScorer();
    tennisScorer.player1Scores();
    tennisScorer.player1Scores();
    expect(tennisScorer.showScore()).toEqual("30 - Love");
  });

});