import readlineSync from 'readline-sync';
import run from './cli.js';

const MAX_GUESS_NUMBER = 30;

function getRandomNumber(max) {
  return 1 + Math.floor(Math.random() * max);
}

// eslint-disable-next-line consistent-return
const getCorrectAnswer = (a, b) => {
  for (let i = Math.min(a, b); i >= 0; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
};

export default function gcdGame() {
  const name = run();
  console.log('Find the greatest common divisor of given numbers');
  for (let i = 0; i < 3; i += 1) {
    const firstRandomNumber = getRandomNumber(MAX_GUESS_NUMBER);
    const secondRandomNumber = getRandomNumber(MAX_GUESS_NUMBER);
    console.log(`Question: ${firstRandomNumber} ${secondRandomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(firstRandomNumber, secondRandomNumber);
    if (correctAnswer !== +answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}
