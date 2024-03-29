import welcome from './cli.js';
import { parseAnswer } from './utils.js';

export const COUNT_OF_GAMES = 3;

export const runEngine = (rules, generateRound) => {
  const name = welcome();
  console.log(rules);
  for (let i = 0; i < COUNT_OF_GAMES; i += 1) {
    const [question, answer] = generateRound();
    const userAnswer = parseAnswer(question);
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
