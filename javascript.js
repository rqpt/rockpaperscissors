const resultsContainer = document.querySelector('.results-container');

const pParaDisplay = document.createElement('p');
const pScoreDisplay = document.createElement('p');
const cParaDisplay = document.createElement('p');
const cScoreDisplay = document.createElement('p');
const resultDisplay = document.createElement('p');
resultsContainer.appendChild(pParaDisplay);
resultsContainer.appendChild(cParaDisplay);
resultsContainer.appendChild(pScoreDisplay);
resultsContainer.appendChild(cScoreDisplay);
resultsContainer.appendChild(resultDisplay);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', play));
let pScore = 0;
let cScore = 0;

function play() {
	const pSelection = this.innerText.toUpperCase();
	const cSelection = getCSelection();
	pParaDisplay.innerText = `Player choses ${pSelection}.`;
	cParaDisplay.innerText = `Computer choses ${cSelection}.`;

	if (pSelection === cSelection) {
		return;
	} else if	((pSelection === "ROCK" && cSelection === "SCISSORS") ||
				 		 (pSelection === "PAPER" && cSelection === "ROCK") ||
					(pSelection === "SCISSORS" && cSelection === "PAPER")) {
		++pScore;
		pScoreDisplay.innerText = `Player score = ${pScore}`;
		cScoreDisplay.innerText = `Computer score = ${cScore}`;
	} else {
		++cScore;
		pScoreDisplay.innerText = `Player score = ${pScore}`;
		cScoreDisplay.innerText = `Computer score = ${cScore}`;
	}
	if (pScore === 5) {
		alert("VICTORY");
		pScore = 0;
		cScore = 0;
		pScoreDisplay.innerText = `Player score = ${pScore}`;
		cScoreDisplay.innerText = `Computer score = ${cScore}`;
	} else if (cScore === 5) {
		alert("DEFEAT");
		pScore = 0;
		cScore = 0;
		pScoreDisplay.innerText = `Player score = ${pScore}`;
		cScoreDisplay.innerText = `Computer score = ${cScore}`;
	}
};

function getCSelection() {
	let possibleSelections = ["ROCK", "PAPER", "SCISSORS"];
	function getRandomInt() {
		return Math.floor(Math.random() * 3);
	}
	return possibleSelections[getRandomInt()];
}
