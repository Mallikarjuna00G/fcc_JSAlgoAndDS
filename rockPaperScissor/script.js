function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
  
let playerScore = 0;
let computerScore = 0;
  
function hasPlayerWonTheRound(player, computer) {
    return (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    );
}

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    let roundResult = hasPlayerWonTheRound(userOption, computerResult);

    let msg = '';
    if(roundResult) {
        playerScore++;
        msg = `Player wins! ${userOption} beats ${computerResult}`;
    } else {
        computerScore++;
        msg = `Computer wins! ${computerResult} beats ${userOption}`;
        if(computerResult === userOption) {
            msg = `It's a tie! Both chose ${userOption}`;
            computerScore--;
        }
    }
    return msg;
}
  
console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);