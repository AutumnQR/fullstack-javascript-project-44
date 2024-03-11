import readlineSync from 'readline-sync';
import welcomeMessage from '../cli.js';
import {
  checkCorrectAnswer,
  getCorrectAnswerEven,
  getRandomNumber,
} from '../index.js';

const brainEven = () => {
  const name = welcomeMessage();
  let correctAnswersCount = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
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
