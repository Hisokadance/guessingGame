let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Твоё число:';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = "ТЫ ВЫИГРАЛ!!!"
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = " ";
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = " !!!GGG!!!";
        setGameOver();
    } else {
        lastResult.textContent = "не правильно лох!";
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Слишком маленькое число, нужно больше!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Слишком большое число, нужно меньше!';
        }

    }
    guessCount++
    guessField.value = "";
    guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);



function resetGame() {
    guessCount = 1;

    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'начинай заного неудачник';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}
