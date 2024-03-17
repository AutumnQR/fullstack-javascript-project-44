import readlineSync from 'readline-sync';

// eslint-disable-next-line max-len
export const getRandomNumber = (min = 0, max = 100) => Math.floor(min + Math.random() * (max - min + 1));
export const getRandomIndex = (list) => Math.floor(Math.random() * (list.length - 1));

export const getRandomNumbers = () => {
  const numOne = getRandomNumber();
  const numTwo = getRandomNumber();
  return numOne > numTwo ? [numOne, numTwo] : [numTwo, numOne];
};

export const parseAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answerString = readlineSync.question('Your answer: ');
  const answerNumber = parseInt(answerString, 10);
  return answerNumber || answerString;
};
