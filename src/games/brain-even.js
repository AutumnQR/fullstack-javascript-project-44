import { getRandomNumber } from '../utils.js';
import { runEngine } from '../index.js';

const getCorrectAnswerEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const generateRound = () => {
  const randomNum = getRandomNumber();
  const correctAnswer = getCorrectAnswerEven(randomNum);
  return [randomNum, correctAnswer];
};

const brainEven = () => {
  runEngine(
    'Answer "yes" if the number is even, otherwise answer "no".',
    generateRound,
  );
};

export default brainEven;
