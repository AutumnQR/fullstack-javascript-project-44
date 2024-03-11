export const COUNT_OF_GAMES = 3;
export const getRandomNumber = () => Math.floor(Math.random() * 20);

export const getCorrectAnswerNOD = (numOne, numTwo) => {
  if (numTwo !== 0) {
    const residue = numOne % numTwo;
    return getCorrectAnswerNOD(numTwo, residue);
  }
  return numOne;
};

export const getCorrectAnswerEven = (randomNum) => {
  if (randomNum % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

export const getCorrectAnswerCalc = (nums, mathOperator) => {
  switch (mathOperator) {
    case '+':
      return nums[0] + nums[1];
    case '-':
      return nums[0] - nums[1];
    case '*':
      return nums[0] * nums[1];
    default:
      return undefined;
  }
};

export const checkCorrectAnswer = (
  correctAnswer,
  answer,
  correctAnswersCount,
  name,
) => {
  if (correctAnswer === answer) {
    console.log('Correct!');

    if (correctAnswersCount >= 3) {
      console.log(`Congratulations, ${name}!`);
      return { correct: true, continue: false };
    }

    return { correct: true, continue: true };
  }

  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  );
  console.log(`Let's try again, ${name}!`);

  return { correct: false, continue: false };
};

export const getRandomMathExpression = () => {
  const mathSyms = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (mathSyms.length - 1));
  return mathSyms[randomIndex];
};

export const getRandomNumbers = () => {
  const numOne = Math.floor(Math.random() * 10);
  const numTwo = Math.floor(Math.random() * 10);
  return numOne > numTwo ? [numOne, numTwo] : [numTwo, numOne];
};
