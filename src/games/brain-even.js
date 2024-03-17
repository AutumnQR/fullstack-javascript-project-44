import welcome from '../cli.js';
import {
  checkCorrectAnswer,
  COUNT_OF_GAMES,
  getCorrectAnswerEven,
  getRandomNumber,
  parseAnswer,
} from '../index.js';

const brainEven = () => {
  const name = welcome();
  let correctAnswersCount = 1;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < COUNT_OF_GAMES; i += 1) {
    const randomNum = getRandomNumber();
    const correctAnswer = getCorrectAnswerEven(randomNum);
    const userAnswer = parseAnswer(randomNum);

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

export default brainEven;
