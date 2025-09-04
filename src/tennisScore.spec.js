import showScore from "./tennisScore";

describe("Tennis Score", () => {
  it("deberia mostrar el marcador inicial Love - Love", () => {
    expect(showScore()).toEqual("Love - Love");
  });

});