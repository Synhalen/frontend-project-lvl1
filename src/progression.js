import readlineSync from 'readline-sync';
import { run } from './cli.js';

const MAX_FIRST_NUMBER = 50;
const MAX_STEP_NUMBER = 5;
const MAX_HIDDEN_NUMBER = 10;

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getProgressionString(firstNumber, stepNumber, hiddenNumber) {
  let mathProgression = '';
  for (let i = 1; i <= MAX_HIDDEN_NUMBER; i++) {
    if (i === hiddenNumber) {
      mathProgression += `.. `
    } else {
      mathProgression += `${firstNumber} `
    }
    firstNumber += stepNumber;
  }
  return mathProgression;
}

const getCorrectAnswer = (firstNumber, stepNumber, hiddenNumber) => {
  return firstNumber + (hiddenNumber - 1) * stepNumber;
};

export function progressionGame() {
  const name = run();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    let firstNumber = getRandomNumber(MAX_FIRST_NUMBER);
    let stepNumber = 2 + getRandomNumber(MAX_STEP_NUMBER);
    let hiddenNumber = 1 + getRandomNumber(MAX_HIDDEN_NUMBER);
    let mathProgression = getProgressionString(firstNumber, stepNumber, hiddenNumber);
    console.log(`Question: ${mathProgression}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(firstNumber, stepNumber, hiddenNumber);
    if (correctAnswer !== +answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}
