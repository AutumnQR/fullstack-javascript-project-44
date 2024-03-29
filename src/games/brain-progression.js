import { runEngine } from '../index.js';
import { getRandomIndex, getRandomNumber } from '../utils.js';

const generateProgression = (start, step, length = 10) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const generateRound = () => {
  const step = getRandomNumber(1, 20);
  const startNumber = getRandomNumber(1, 20);
  const progression = generateProgression(startNumber, step);

  const randomIndex = getRandomIndex(progression);
  const replacedItem = String(progression[randomIndex]);
  const hiddenProgression = progression.join(' ').replace(replacedItem, '..');

  return [hiddenProgression, replacedItem];
};

const brainProgression = () => {
  runEngine('What number is missing in the progression?', generateRound);
};

export default brainProgression;
