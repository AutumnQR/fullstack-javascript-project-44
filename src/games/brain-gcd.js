import { runEngine } from '../index.js';
import { getRandomNumbers } from '../utils.js';

const getCorrectAnswerNOD = (numOne, numTwo) => {
  if (numTwo !== 0) {
    const residue = numOne % numTwo;
    return getCorrectAnswerNOD(numTwo, residue);
  }
  return numOne;
};

const generateRound = () => {
  const [numOne, numTwo] = getRandomNumbers();
  const correctAnswer = getCorrectAnswerNOD(numOne, numTwo);
  return [`${numOne} ${numTwo}`, correctAnswer];
};

const brainGcd = () => {
  runEngine(
    'Find the greatest common divisor of given numbers.',
    generateRound,
  );
};

export default brainGcd;
