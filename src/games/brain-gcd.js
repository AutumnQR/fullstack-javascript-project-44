import { runEngine } from '../index.js';
import { getRandomNumber } from '../utils.js';

const getCorrectAnswerNOD = (numOne, numTwo) => {
  if (numTwo !== 0) {
    const residue = numOne % numTwo;
    return getCorrectAnswerNOD(numTwo, residue);
  }
  return numOne;
};

const generateRound = () => {
  const numOne = getRandomNumber(1, 20);
  const numTwo = getRandomNumber(1, 20);
  const correctAnswer = String(getCorrectAnswerNOD(numOne, numTwo));
  const question = `${numOne} ${numTwo}`;
  return [question, correctAnswer];
};

const brainGcd = () => {
  runEngine(
    'Find the greatest common divisor of given numbers.',
    generateRound,
  );
};

export default brainGcd;
