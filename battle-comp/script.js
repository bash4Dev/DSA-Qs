// Step one

function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
  
  }
  console.log(getRandomComputerResult());

// Step two

function hasPlayerWonTheRound(player, computer) {
  
}

console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
console.log(hasPlayerWonTheRound("Scissors", "Rock"));

// Step three

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
   
}

// A code for testing
console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);

// Step four

function showResults(userOption) {

};

showResults("Rock");

// Step five

function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
  
  
  };

  rockBtn.addEventListener("click", function () {
    showResults("Rock");
  });
  
  paperBtn.addEventListener("click", function () {
    showResults("Paper");
  });
  
  scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
  });

// Step six

function resetGame() {

};