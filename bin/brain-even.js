#!/usr/bin/env node

import readlineSync from 'readline-sync';
import welcomeMessage from '../src/cli.js';

const name = welcomeMessage();

const getRandomNumber = () => Math.floor(Math.random() * 20);
const getCorrectAnswer = (randomNum) => {
  if (randomNum % 2 === 0) {
    return 'yes';
  }

  if (randomNum % 2 !== 0) {
    return 'no';
  }

  return undefined;
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswersCount = 0;

for (let i = 0; i < 3; i += 1) {
  const randomNum = getRandomNumber();
  const correctAnswer = getCorrectAnswer(randomNum);

  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');

  if (correctAnswer === answer) {
    correctAnswersCount += 1;
    console.log('Correct!');
    if (correctAnswersCount >= 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
