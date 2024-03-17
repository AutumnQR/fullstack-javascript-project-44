import welcome from '../cli.js';
import {
  checkCorrectAnswer,
  COUNT_OF_GAMES,
  getCorrectAnswerNOD,
  getRandomNumbers,
  parseAnswer,
} from '../index.js';

const brainGcd = () => {
  const name = welcome();
  let correctAnswersCount = 1;
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < COUNT_OF_GAMES; i += 1) {
    const [numOne, numTwo] = getRandomNumbers();
    const correctAnswer = getCorrectAnswerNOD(numOne, numTwo);

    const userAnswer = parseAnswer(`${numOne} ${numTwo}`, true);

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

export default brainGcd;
