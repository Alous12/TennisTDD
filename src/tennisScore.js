class TennisScorer {
  constructor() {
    this.player1Points = 0;
    this.player2Points = 0;
  }

  showScore() {
    const scoreNames = ["Love", "15", "30", "40"];
    const p1 = scoreNames[this.player1Points] ;
    const p2 = scoreNames[this.player2Points] ;
    let result = "";
    if (this.player1Points >= 3 && this.player2Points >= 3)
    {
        if (this.player1Points === this.player2Points)
        {
            result = "Deuce";
        }
    }
    else
    {
        result = `${p1} - ${p2}`;
    }
    return result;
  }

  player1Scores() {
    this.player1Points++;
  }

  player2Scores() {
    this.player2Points++;
  }
}

export default TennisScorer;