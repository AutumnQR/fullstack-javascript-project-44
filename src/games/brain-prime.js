import readlineSync from 'readline-sync';
import welcomeMessage from '../cli.js';
import {
  checkCorrectAnswer,
  COUNT_OF_GAMES,
  getCorrectAnswerPrime,
  getRandomNumber,
} from '../index.js';

const brainProgression = () => {
  const name = welcomeMessage();
  let correctAnswersCount = 1;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < COUNT_OF_GAMES; i += 1) {
    const number = getRandomNumber(15);
    const correctAnswer = getCorrectAnswerPrime(number);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const check = checkCorrectAnswer(
      correctAnswer,
      userAnswer,
      correctAnswersCount,
      name,
    );

    if (!check.continue || !check.correct) {
      break;
    } else {
      correctAnswersCount += 1;
    }
  }
};

export default brainProgression;
