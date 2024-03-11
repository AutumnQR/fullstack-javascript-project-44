import readlineSync from 'readline-sync';
import welcomeMessage from '../cli.js';
import {
  checkCorrectAnswer,
  getCorrectAnswerNOD,
  getRandomNumbers,
} from '../index.js';

const brainGcd = () => {
  const name = welcomeMessage();
  let correctAnswersCount = 0;
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const [numOne, numTwo] = getRandomNumbers();
    const correctAnswer = getCorrectAnswerNOD(numOne, numTwo);

    console.log(`Question: ${numOne} ${numTwo}`);
    const answer = parseInt(readlineSync.question('Your answer: '), 10);

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

export default brainGcd;
