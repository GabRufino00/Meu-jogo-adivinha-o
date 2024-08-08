let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

document.getElementById('attempts-left').textContent = `Tentativas restantes: ${attemptsLeft}`;

document.getElementById('guess-button').addEventListener('click', function() {
    const guess = Number(document.getElementById('guess-input').value);
    let resultMessage = '';

    if (guess === randomNumber) {
        resultMessage = 'Parabéns! Você adivinhou o número!';
        gameOver();
    } else if (guess > randomNumber) {
        resultMessage = 'O número é menor!';
    } else {
        resultMessage = 'O número é maior!';
    }

    attemptsLeft--;
    document.getElementById('attempts-left').textContent = `Tentativas restantes: ${attemptsLeft}`;
    document.getElementById('result').textContent = resultMessage;

    if (attemptsLeft === 0 && guess !== randomNumber) {
        document.getElementById('result').textContent = `Fim de jogo! O número era ${randomNumber}.`;
        gameOver();
    }
});

function gameOver() {
    document.getElementById('guess-button').disabled = true;
    document.getElementById('guess-input').disabled = true;
}