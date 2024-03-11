import readlineSync from 'readline-sync';
import welcomeMessage from '../cli.js';
import {
  COUNT_OF_GAMES,
  checkCorrectAnswer,
  getCorrectAnswerCalc,
  getRandomMathExpression,
  getRandomNumbers,
} from '../index.js';

const brainCalc = () => {
  const name = welcomeMessage();
  let correctAnswersCount = 0;

  for (let i = 0; i < COUNT_OF_GAMES; i += 1) {
    const mathOperator = getRandomMathExpression();
    const nums = getRandomNumbers();
    const correctAnswer = getCorrectAnswerCalc(nums, mathOperator);

    console.log(`Question: ${nums[0]} ${mathOperator} ${nums[1]}`);
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

export default brainCalc;
