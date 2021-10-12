import readlineSync from 'readline-sync';
import { run } from './cli.js';

const MAX_GUESS_NUMBER = 10;
const MAX_OPERATOR_NUMBER = 3;

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomOperator() {
  const operator = getRandomNumber(MAX_OPERATOR_NUMBER);

  if (operator === 0) {
    return '+';
  } if (operator === 1) {
    return '-';
  }
  return '*';
}

const getCorrectAnswer = (a, b, op) => {
  if (op === '+') {
    return a + b;
  } if (op === '-') {
    return a - b;
  }
  return a * b;
};

export function calcGame() {
  const name = run();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const firstRandomNumber = getRandomNumber(MAX_GUESS_NUMBER);
    const secondRandomNumber = getRandomNumber(MAX_GUESS_NUMBER);
    const operator = getRandomOperator();
    console.log(`Question: ${firstRandomNumber} ${operator} ${secondRandomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(firstRandomNumber, secondRandomNumber, operator);
    if (correctAnswer !== +answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}
