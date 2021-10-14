import readlineSync from 'readline-sync';
import run from './cli.js';

const MAX_GUESS_NUMBER = 100;

function getRandomNumber(max = MAX_GUESS_NUMBER) {
  return Math.floor(Math.random() * max);
}

function getCorrectAnswer(num) {
  if (num > 1) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) { return 'no'; }
    }
  }
  return 'yes';
}

export default function primeGame() {
  const name = run();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
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
