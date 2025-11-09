let scoreA = 0;
let scoreB = 0;
let setA = 0;
let setB = 0;

const scoreADisplay = document.getElementById("scoreA");
const scoreBDisplay = document.getElementById("scoreB");
const setADisplay = document.getElementById("setA");
const setBDisplay = document.getElementById("setB");

document.getElementById("addA").addEventListener("click", () => addPoints("A"));
document.getElementById("subA").addEventListener("click", () => subPoints("A"));
document.getElementById("addB").addEventListener("click", () => addPoints("B"));
document.getElementById("subB").addEventListener("click", () => subPoints("B"));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") addPoints("A");
  if (event.key === "ArrowRight") addPoints("B");
  if (event.key === "ArrowDown") subPoints("A");
  if (event.key === "ArrowUp") subPoints("B");
});

function addPoints(team) {
  if (team === "A") {
    scoreA += 1;
    if (scoreA >= 25) {
      setA++;
      scoreA = 0;
      setADisplay.textContent = setA;
    }
    animateScore(scoreADisplay);
    scoreADisplay.textContent = scoreA;
  } else {
    scoreB += 1;
    if (scoreB >= 25) {
      setB++;
      scoreB = 0;
      setBDisplay.textContent = setB;
    }
    animateScore(scoreBDisplay);
    scoreBDisplay.textContent = scoreB;
  }
}

function subPoints(team) {
  if (team === "A") {
    scoreA = Math.max(0, scoreA - 1);
    animateScore(scoreADisplay);
    scoreADisplay.textContent = scoreA;
  } else {
    scoreB = Math.max(0, scoreB - 1);
    animateScore(scoreBDisplay);
    scoreBDisplay.textContent = scoreB;
  }
}

function animateScore(element) {
  element.classList.add("bump");
  setTimeout(() => element.classList.remove("bump"), 25);
}
