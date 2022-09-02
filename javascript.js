const computerSelection = getComputerSelection();
const playerSelection = prompt("Choose your weapon");

let result = playRound(playerSelection, computerSelection);
console.log(result);

function getComputerSelection() {
	let possibleSelections = ["Rock", "Paper", "Scissors"];
	function getRandomInt() {
		return Math.floor(Math.random() * 3);
	}
	return possibleSelections[getRandomInt()];
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toUpperCase();
	computerSelection = computerSelection.toUpperCase();
	if (playerSelection === computerSelection) {
		return "Tied";
	} else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
		return "You've won!";
	} else {
		return "You've lost :(";
	}
}

console.log(playerSelection);
console.log(computerSelection);
