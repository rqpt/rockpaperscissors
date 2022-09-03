let roundResult;

// Declare a function called game.
// Declare counter variables called playerPoints, computerPoints 
// loop the following five times-
// call the playRound function
// if playRound is equal to "You've won!", increment playerPoints by 1
// else if playRound is equal to "You've lost :(", increment computerPoints by 1

// if playerPoints is a greater than computerPoints, console log "VICTORY"
// else if playerPoints equals computerPoints, console log "TIE"
// else if playerPoints is a lesser than computerPoints, console log "DEFEAT"
//
function game() {
	let playerPoints = 0;
	let computerPoints = 0;

	for(let i = 0; i < 5; i++) {
		playRound();
		if (roundResult == "You've won!") {
			++playerPoints;
		} else if (roundResult == "You've lost :(") {
			++computerPoints;
		}
		console.log(playerPoints);
		console.log(computerPoints);
	}
	if (playerPoints > computerPoints) {
		console.log("VICTORY");
	} else if (playerPoints == computerPoints) {
		console.log("TIE");
	} else {
		console.log("DEFEAT");
	}
}

function playRound() {
	const playerSelection = prompt("Choose your weapon!").toUpperCase();
	const computerSelection = getComputerSelection();
		console.log(playerSelection);
		console.log(computerSelection);
	if (playerSelection === computerSelection) {
		roundResult = "Tied";
	} else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
		roundResult = "You've won!";
	} else {
		roundResult = "You've lost :(";
	}
}

function getComputerSelection() {
	let possibleSelections = ["ROCK", "PAPER", "SCISSORS"];
	function getRandomInt() {
		return Math.floor(Math.random() * 3);
	}
	return possibleSelections[getRandomInt()];
}
