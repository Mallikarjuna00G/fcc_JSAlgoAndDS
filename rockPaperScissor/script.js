function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
  
function hasPlayerWonTheRound(player, computer) {    
    if(
        (player === "Rock" && computer === "Paper") ||
        (player === "Paper" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Rock") ||
        (player === computer)
    ) {
        return false;
    }
    return true;
}
  
console.log(hasPlayerWonTheRound("Rock", "Paper")); 
console.log(hasPlayerWonTheRound("Paper", "Scissors")); 
console.log(hasPlayerWonTheRound("Scissors", "Rock")); 
console.log(hasPlayerWonTheRound("Rock", "Rock")); 
console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
console.log(hasPlayerWonTheRound("Scissors", "Rock")); 