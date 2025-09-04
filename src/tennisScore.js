class TennisScorer {
  constructor() {
    this.player1Points = 0;
    this.player2Points = 0;
  }

  showScore() {
    const scoreNames = ["Love", "15", "30", "40"];
    const p1 = scoreNames[this.player1Points] ;
    const p2 = scoreNames[this.player2Points] ;
    return `${p1} - ${p2}`;
  }

  player1Scores() {
    this.player1Points++;
  }

  player2Scores() {
    this.player2Points++;
  }
}

export default TennisScorer;