import { getRandomNumber } from '../utils.js';
import { runEngine } from '../index.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEven = () => {
  runEngine(
    'Answer "yes" if the number is even, otherwise answer "no".',
    generateRound,
  );
};

export default brainEven;
