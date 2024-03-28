import { getRandomNumber } from '../utils.js';
import { runEngine } from '../index.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNum = getRandomNumber();
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [randomNum, correctAnswer];
};

const brainEven = () => {
  runEngine(
    'Answer "yes" if the number is even, otherwise answer "no".',
    generateRound,
  );
};

export default brainEven;
