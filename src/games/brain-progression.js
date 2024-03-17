import welcomeMessage from '../cli.js';
import {
  checkCorrectAnswer,
  COUNT_OF_GAMES,
  getHiddenProgression,
  parseAnswer,
} from '../index.js';

const brainProgression = () => {
  const name = welcomeMessage();
  let correctAnswersCount = 1;
  console.log('What number is missing in the progression?');

  for (let i = 0; i < COUNT_OF_GAMES; i += 1) {
    const { hiddenProgression, correctAnswer } = getHiddenProgression();
    const userAnswer = parseAnswer(hiddenProgression);

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

export default brainProgression;
