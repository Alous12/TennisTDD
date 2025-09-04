import TennisScorer from "./tennisScore.js";

const scoreDiv = document.getElementById("score-div");
const player1Btn = document.getElementById("player1-btn");
const player2Btn = document.getElementById("player2-btn");
const resetBtn = document.getElementById("reset-btn");

let tennisScorer = new TennisScorer();

function updateScore() {
  scoreDiv.textContent = tennisScorer.showScore();
}

player1Btn.addEventListener("click", () => {
  if (!tennisScorer.showScore().includes("wins")) {
    tennisScorer.player1Scores();
    updateScore();
  }
});

player2Btn.addEventListener("click", () => {
  if (!tennisScorer.showScore().includes("wins")) {
    tennisScorer.player2Scores();
    updateScore();
  }
});

resetBtn.addEventListener("click", () => {
  tennisScorer = new TennisScorer();
  updateScore();
});

// Inicializa marcador al cargar
updateScore();