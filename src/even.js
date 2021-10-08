import readlineSync from 'readline-sync';
import { run } from './cli.js';

const MAX_GUESS_NUMBER = 5000;

function getRandomNumber(max = MAX_GUESS_NUMBER) {
  return Math.floor(Math.random() * max);
}

const getCorrectAnswer = (n) => (n % 2 === 0 ? 'yes' : 'no');

export function evenGame() {
  const name = run();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}!`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(randomNumber);
    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}
