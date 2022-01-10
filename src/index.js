const max = 100;
const min = 1;
const maxGuesses = 10;
let prevTime, stopwatchInterval, elapsedTime = 0;

let randomNumber = Math.floor(Math.random() * max) + min;
const timePlace = document.querySelector('.time');
const guessCounter = document.querySelector('.guessCount');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();

let tries = 0;
guessCounter.textContent = 0;

const checkGuess = () => {

  guessCounter.textContent = 0;

  tries++;
  guessCounter.textContent = tries;

  console.log(tries);

  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(function () {
      if (!prevTime) {
        prevTime = Date.now();
      }
      console.log(prevTime)
      elapsedTime += Date.now() - prevTime;
      prevTime = Date.now();
      
      updateTime();
    }, 50)
  } 

  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === maxGuesses) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  } 
  
  
  
  

  guessCount++;
  guessField.value = '';
  guessField.focus();

  
};

guessSubmit.addEventListener('click', checkGuess);

const setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
  if (stopwatchInterval) {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
  }
  prevTime = null;
};

const resetGame = () => {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  };

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';
  guessCounter.textContent = 0

  randomNumber = Math.floor(Math.random() * max) + min;
  elapsedTime = 0;
  updateTime();
};



const updateTime = () => {
  let tempTime = elapsedTime;
  const milliseconds = tempTime % 1000;
  tempTime = Math.floor(tempTime / 1000);
  const seconds = tempTime % 60;
  tempTime = Math.floor(tempTime / 60);
  const minutes = tempTime % 60;
  tempTime = Math.floor(tempTime / 60);
  const hours = tempTime % 60;
  
  let time = hours + " : " + minutes + " : " + seconds + "." + milliseconds;
  
  timePlace.textContent = time;
};

updateTime();
