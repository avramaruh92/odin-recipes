console.log("Hello world!")

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors (5 times consecutively, for each round):").toLowerCase();
    while (!['rock', 'paper', 'scissors'].includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("Computer wins this round!");
        computerScore++;
    }

    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

for (let i = 0; i < 5; i++) {
    playRound();
}

if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
} else if (computerScore > humanScore) {
    console.log("Computer wins the game! Better luck next time.");
} else {
    console.log("The game is a tie!");
}