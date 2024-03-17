import readlineSync from 'readline-sync';
import welcomeMessage from '../cli.js';
import {
  COUNT_OF_GAMES,
  checkCorrectAnswer,
  getCorrectAnswerCalc,
  getRandomMathExpression,
  getRandomNumbers,
  parseAnswer,
} from '../index.js';

const brainCalc = () => {
  const name = welcomeMessage();
  let correctAnswersCount = 1;
  console.log('What is the result of the expression?');

  for (let i = 0; i < COUNT_OF_GAMES; i += 1) {
    const mathOperator = getRandomMathExpression();
    const nums = getRandomNumbers();
    const correctAnswer = getCorrectAnswerCalc(nums, mathOperator);

    const userAnswer = parseAnswer(
      `${nums[0]} ${mathOperator} ${nums[1]}`,
      true,
    );

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

export default brainCalc;
