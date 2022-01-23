/**
 * Käytössä olisi binary search algoritmi
 * Veikkaa aina kahden arvon keskeltä, ja poistaa sen puolen jolla tietää että arvattava arvo ei ole
 * Kunnes jäljelle jää vain oikea vastaus
 */

let max = 100;
let min = 1;
const maxGuesses = 10;
let currGuess = 0;
let nGuesses = 0;
const guessAvg = [];
let prevGuesses = [];
let prevTime, stopwatchInterval, elapsedTime = 0;

let randomNumber = Math.floor(Math.random() * max) + min;
console.log(randomNumber);
const timePlace = document.querySelector('.time');
const guessCounter = document.querySelector('.guessCount');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const result = document.querySelector('.result');
const startBtn = document.querySelector('#startBtn');
const startBtn2 = document.querySelector('#startBtn2');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();
guessCounter.textContent = 0;

  const isGuessCorrect = () => {
    guessCounter.textContent = `I guessed your number in ${nGuesses} tries!`;
    max = 100;
    min = 1;
    randomNumber = Math.floor(Math.random() * max) + min;
    guessAvg.push(nGuesses);
    console.log('Arvauksien määrä = ' + guessAvg);
    nGuesses = 0;
    /* prevGuesses = []; */
  };

  const numIsHigher = () => {
    min = currGuess + 1;
    console.log("Changing the minimum to: " + min);

    tryGuess();
  };

  const numIsLower = () => {
    max = currGuess - 1;
    console.log("Changing the maximum to: " + max);

    tryGuess();
  };

  const tryGuess = () => {
    guesses.textContent = "My guess is:";
    if (nGuesses < maxGuesses) {
      nGuesses++;
      currGuess = Math.floor((max - min) / 2) + min;
      console.log(`Guessing between ${min} and ${max} - guessing ${currGuess} - this is guess number ${nGuesses}`);
      prevGuesses.push(currGuess);
      console.log(prevGuesses);
      guesses.textContent += prevGuesses;
      guessCounter.textContent = nGuesses;
      if (randomNumber === currGuess) {
        isGuessCorrect();
      } else if (randomNumber > currGuess) {
        numIsHigher();
      } else {
        numIsLower();
      }
    }
  };


const loop = () => {
  for (let i = 0; i < 1500; i++) {
    tryGuess();
  }
  results();
};

const calculateAverage = (array) => {
  let total = 0;
  let count = 0;

  array.forEach(function(item, index) {
      total += item;
      count++;
  });

  return total / count;
};


const results = () => {
  guessAvg.sort();
  const max = guessAvg.pop();
  const min = guessAvg.shift();
  console.log(calculateAverage(guessAvg), max, min);
  result.textContent = `Average guess count = ${calculateAverage(guessAvg)}, Highest guess count = ${max}, Lowest guess count = ${min}`;
};
startBtn2.addEventListener("click", loop); 
startBtn.addEventListener("click", tryGuess); 