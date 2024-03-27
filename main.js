window.onload = function() {
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

    function playRound(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'It\'s a tie!';
        }
        else if (userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper') {
            return 'You win!';
        }
        else {
            return 'You lose!';
        }
    }

    const userChoiceElement = document.getElementById('userChoice');
    const playButton = document.getElementById('playButton');
    const resultElement = document.getElementById('winnerField');

    playButton.addEventListener('click', () => {
        const userChoice = userChoiceElement.value === '1' ? 'rock' : userChoiceElement.value === '2' ? 'paper' : 'scissors';
        const computerChoice = getComputerChoice();
        const result = playRound(userChoice, computerChoice);
        resultElement.textContent = result;
        resultElement.style.display = 'block';
    });
}