import readlineSync from 'readline-sync';
import welcomeMessage from '../cli.js';
import {
  checkCorrectAnswer,
  COUNT_OF_GAMES,
  getCorrectAnswerEven,
  getRandomNumber,
} from '../index.js';

const brainEven = () => {
  const name = welcomeMessage();
  let correctAnswersCount = 1;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < COUNT_OF_GAMES; i += 1) {
    const randomNum = getRandomNumber();
    const correctAnswer = getCorrectAnswerEven(randomNum);

    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');

    const check = checkCorrectAnswer(
      correctAnswer,
      answer,
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

export default brainEven;
