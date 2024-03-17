import { getRandomNumber } from '../utils.js';
import { runEngine } from '../index.js';

const getCorrectAnswerPrime = (number) => {
  if (number > 1) {
    for (let i = 2; i * i <= number; i += 1) {
      if (number % i === 0) return 'no';
    }
    return 'yes';
  }
  return 'no';
};

const generateRound = () => {
  const number = getRandomNumber(15);
  const correctAnswer = getCorrectAnswerPrime(number);
  return [number, correctAnswer];
};

const brainPrime = () => {
  runEngine(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateRound,
  );
};

export default brainPrime;
