import { runEngine } from '../index.js';
import { getRandomIndex, getRandomNumbers } from '../utils.js';

export const getRandomMathExpression = () => {
  const mathSyms = ['+', '-', '*'];
  const randomIndex = getRandomIndex(mathSyms);
  return mathSyms[randomIndex];
};

const getCorrectAnswerCalc = (nums, mathOperator) => {
  switch (mathOperator) {
    case '+':
      return nums[0] + nums[1];
    case '-':
      return nums[0] - nums[1];
    case '*':
      return nums[0] * nums[1];
    default:
      return undefined;
  }
};

const generateRound = () => {
  const mathOperator = getRandomMathExpression();
  const nums = getRandomNumbers();
  const correctAnswer = getCorrectAnswerCalc(nums, mathOperator);
  return [`${nums[0]} ${mathOperator} ${nums[1]}`, correctAnswer];
};

const brainCalc = () => {
  runEngine('What is the result of the expression?', generateRound);
};

export default brainCalc;
