import { runEngine } from '../index.js';
import { getRandomIndex, getRandomNumber } from '../utils.js';

const generateRound = (length = 10) => {
  const progression = getRandomNumber(10);
  const startNumber = getRandomNumber();
  let nextNumber = startNumber + progression;
  const list = [startNumber];

  for (let i = 1; i < length; i += 1) {
    list.push(nextNumber);
    nextNumber += progression;
  }

  const randomIndex = getRandomIndex(list);
  const replacedItem = list[randomIndex];
  const hiddenProgression = list.join(' ').replace(replacedItem, '..');

  return [hiddenProgression, replacedItem];
};

const brainProgression = () => {
  runEngine('What number is missing in the progression?', generateRound);
};

export default brainProgression;
