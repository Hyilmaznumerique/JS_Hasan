// you can write js here
console.log('exo-3');

var playerInput = prompt("Your choice (rock, paper, scissors)?");

function getPlayerChoice(playerInput) { 
    playerInput = playerInput.toLowerCase(); 
    if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors') { return playerInput; 
    } else { 
    console.error("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.");
    }
}

function getComputerChoice() { 
    const randomNumber = Math.floor(Math.random() * 3); 
    switch (randomNumber) { 
        case 0: 
            return 'rock'; 
        case 1: 
            return 'paper'; 
        case 2: 
            return 'scissors'; 
    } 
}

function findWinner(playerChoice, computerChoice) { 
    if (playerChoice === computerChoice) { 
        return 'Tied'; 
    } 
    if (playerChoice === 'rock') { 
        return computerChoice === 'scissors' ? 'Won' : 'Lost'; 
    } 
    if (playerChoice === 'paper') { 
        return computerChoice === 'rock' ? 'Won' : 'Lost'; 
    } if (playerChoice === 'scissors') { 
        return computerChoice === 'paper' ? 'Won' : 'Lost'; 
    } 
}

function playGame() { 
    const uChoice = getPlayerChoice(playerInput); 
    const computerChoice = getComputerChoice(); 
    console.log('Player Choice:', uChoice); 
    console.log('Computer Choice:', computerChoice); 
    console.log('Result:', findWinner(uChoice, computerChoice)); 
}

function getPlayerChoice(playerInput) { 
    playerInput = playerInput.toLowerCase(); 
    if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors' || playerInput === 'bomb') { 
        return playerInput;
    } else { 
        console.error("Invalid choice. Please choose 'rock', 'paper', 'scissors', or 'bomb'."); 
    } 
}

function findWinner(playerChoice, computerChoice) { 
    if (playerChoice === 'bomb') { 
        return 'Won'; 
    } if (playerChoice === computerChoice) { 
        return 'Tied'; 
    } if (playerChoice === 'rock') { 
        return computerChoice === 'scissors' ? 'Won' : 'Lost'; 
    } if (playerChoice === 'paper') 
        { return computerChoice === 'rock' ? 'Won' : 'Lost'; 
    } if (playerChoice === 'scissors') { 
        return computerChoice === 'paper' ? 'Won' : 'Lost'; 
    } 
}

playGame();