import { runEngine } from '../index.js';
import { getRandomIndex, getRandomNumber } from '../utils.js';

export const getRandomMathExpression = () => {
  const mathSymbols = ['+', '-', '*'];
  const randomIndex = getRandomIndex(mathSymbols);
  return mathSymbols[randomIndex];
};

const getCorrectAnswerCalc = (numOne, numTwo, operator) => {
  switch (operator) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '*':
      return numOne * numTwo;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const mathOperator = getRandomMathExpression();
  const numOne = getRandomNumber();
  const numTwo = getRandomNumber();

  const correctAnswer = String(
    getCorrectAnswerCalc(numOne, numTwo, mathOperator),
  );
  const question = `${numOne} ${mathOperator} ${numTwo}`;
  return [question, correctAnswer];
};

const brainCalc = () => {
  runEngine('What is the result of the expression?', generateRound);
};

export default brainCalc;
