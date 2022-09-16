// Play the game by clicking on buttons on the screen.

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));

const resultsContainer = document.querySelector('.results-container');

const playerPara = document.createElement('p');
const computerPara = document.createElement('p');
const playerScore = document.createElement('p');
const computerScore = document.createElement('p');
const results = document.createElement('p');
resultsContainer.appendChild(playerPara);
resultsContainer.appendChild(computerPara);
resultsContainer.appendChild(playerScore);
resultsContainer.appendChild(computerScore);
resultsContainer.appendChild(results);

function playGame() {

}

function playRound() {
	const playerSelection = this.innerText.toUpperCase();
	const computerSelection = getComputerSelection();
  playerPara.innerText = `Player choses ${playerSelection}.`;
  computerPara.innerText = `Computer choses ${computerSelection}.`;

	if (playerSelection === computerSelection) {
		results.innerText = "Tied";
	} else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
		results.innerText = "You've won!";
	} else {
		results.innerText = "You've lost :(";
	}
}

function getComputerSelection() {
	let possibleSelections = ["ROCK", "PAPER", "SCISSORS"];
	function getRandomInt() {
		return Math.floor(Math.random() * 3);
	}
	return possibleSelections[getRandomInt()];
}
