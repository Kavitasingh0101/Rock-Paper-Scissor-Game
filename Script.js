let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPara = document.querySelector("#user-score");
const compPara = document.querySelector("#computer-score");

const generateComputerChoice = () => {
	const options = ["rock", "paper", "scissor"];
	const randomIndex = Math.floor(Math.random() * 3);
	//generate random options of rock,paper,Scissor
	return options[randomIndex];
};

const drawGame = () => {
	msg.innerText = "Game was draw.Play Again...";
	console.log("Game was Draw.Play Again...");
	msg.style.backgroundColor = "rgba(1, 1, 38, 0.913)";
};

const showWinner = (userWin, userChoice, computerChoice) => {
	if (userWin) {
		console.log("you Win");
		userScore++;
		userPara.innerText = userScore;
		msg.innerText = `You win! Your${userChoice} beats ${computerChoice}`;
		msg.style.backgroundColor = "green";
	} else {
		console.log("you lost");
		computerScore++;
		compPara.innerText = computerScore;
		msg.innerText = `You lose! ${computerChoice} beats Your ${userChoice}`;
		msg.style.backgroundColor = "red";
	}
};

const playGame = (userChoice) => {
	console.log("User Choice =", userChoice);
	//Generate computer choice

	const computerChoice = generateComputerChoice();
	console.log("computer choice", computerChoice);

	if (userChoice === computerChoice) {
		drawGame();
	} else {
		let userWin = true;
		if (userChoice === "rock") {
			userWin = computerChoice === "paper" ? false : true;
		} else if (userChoice === "paper") {
			userWin = computerChoice === "scissor" ? false : true;
		} else {
			// user have scissor
			userWin = computerChoice === "rock" ? false : true;
		}
		showWinner(userWin, userChoice, computerChoice);
	}
};

choices.forEach((choice) => {
	choice.addEventListener("click", () => {
		const userChoice = choice.getAttribute("id");
		playGame(userChoice);
	});
});
